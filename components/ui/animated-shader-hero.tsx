import React, { useRef, useEffect } from 'react';

// ─── Deep blue / electric-space shader ────────────────────────────────────────
const BLUE_SHADER = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 move;
uniform vec2 touch;
uniform int pointerCount;
uniform vec2 pointers;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p){
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
float noise(in vec2 p){
  vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);
  return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);
}
float fbm(vec2 p){
  float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);
  for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}
  return t;
}
float clouds(vec2 p){
  float d=1.,t=.0;
  for(float i=.0;i<3.;i++){
    float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
    t=mix(t,d,a);d=a;p*=2./(i+1.);
  }
  return t;
}

void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2.,1.);
  vec3 col=vec3(0.);
  float bg=clouds(vec2(st.x+T*.2,-st.y));
  uv*=1.-.22*(sin(T*.12)*.5+.5);

  for(float i=1.;i<11.;i++){
    uv+=.09*cos(i*vec2(.1+.01*i,.8)+i*i+T*.3+.08*uv.x);
    vec2 p=uv;
    float d=length(p);

    // Electric blue/indigo palette
    vec3 elec=mix(
      vec3(0.03,0.12,0.95),   // deep blue
      vec3(0.05,0.55,1.00),   // electric cyan-blue
      fract(sin(i*7.31)*.5+.5)
    );
    col+=.0014/d*(cos(sin(i+1.4)*vec3(5.,6.,0.5))+1.)*elec;

    float b=noise(i+p+bg*1.731);
    col+=.0016*b/length(max(p,vec2(b*p.x*.02,p.y)))*vec3(0.04,0.22,1.0);

    // Deep space bg blend
    col=mix(col,vec3(bg*.002,bg*.01,bg*.09),d);
  }

  // Subtle vignette
  float vig=1.-dot(uv,uv)*.18;
  col=pow(clamp(col,0.,1.),vec3(.75))*vig;

  // Final tint toward electric blue
  col*=vec3(0.18,0.48,1.0);

  O=vec4(col,1.);
}`;

// ─── WebGL renderer ────────────────────────────────────────────────────────────
class WebGLRenderer {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram | null = null;
  private vs: WebGLShader | null = null;
  private fs: WebGLShader | null = null;
  private buffer: WebGLBuffer | null = null;
  private scale: number;
  private shaderSource: string;
  private mouseMove = [0, 0];
  private mouseCoords = [0, 0];
  private pointerCoords = [0, 0];
  private nbrOfPointers = 0;

  private readonly vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

  private readonly vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

  constructor(canvas: HTMLCanvasElement, scale: number) {
    this.canvas = canvas;
    this.scale = scale;
    this.gl = canvas.getContext('webgl2')!;
    this.shaderSource = BLUE_SHADER;
  }

  compile(shader: WebGLShader, source: string) {
    const gl = this.gl;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader error:', gl.getShaderInfoLog(shader));
    }
  }

  test(source: string) {
    const gl = this.gl;
    const shader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const result = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
      ? null
      : gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    return result;
  }

  reset() {
    const gl = this.gl;
    if (this.program && !gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
      if (this.vs) { gl.detachShader(this.program, this.vs); gl.deleteShader(this.vs); }
      if (this.fs) { gl.detachShader(this.program, this.fs); gl.deleteShader(this.fs); }
      gl.deleteProgram(this.program);
    }
  }

  setup() {
    const gl = this.gl;
    this.vs = gl.createShader(gl.VERTEX_SHADER)!;
    this.fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    this.compile(this.vs, this.vertexSrc);
    this.compile(this.fs, this.shaderSource);
    this.program = gl.createProgram()!;
    gl.attachShader(this.program, this.vs);
    gl.attachShader(this.program, this.fs);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(this.program));
    }
  }

  init() {
    const gl = this.gl;
    const program = this.program!;
    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);

    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    (program as any).resolution    = gl.getUniformLocation(program, 'resolution');
    (program as any).time          = gl.getUniformLocation(program, 'time');
    (program as any).move          = gl.getUniformLocation(program, 'move');
    (program as any).touch         = gl.getUniformLocation(program, 'touch');
    (program as any).pointerCount  = gl.getUniformLocation(program, 'pointerCount');
    (program as any).pointers      = gl.getUniformLocation(program, 'pointers');
  }

  updateScale(scale: number) {
    this.scale = scale;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }
  updateMove(d: number[])   { this.mouseMove   = d; }
  updateMouse(c: number[])  { this.mouseCoords  = c; }
  updatePointerCoords(c: number[]) { this.pointerCoords = c; }
  updatePointerCount(n: number)    { this.nbrOfPointers  = n; }

  render(now = 0) {
    const gl = this.gl;
    const program = this.program;
    if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

    gl.uniform2f((program as any).resolution, this.canvas.width, this.canvas.height);
    gl.uniform1f((program as any).time,       now * 1e-3);
    gl.uniform2f((program as any).move,       ...this.mouseMove   as [number, number]);
    gl.uniform2f((program as any).touch,      ...this.mouseCoords  as [number, number]);
    gl.uniform1i((program as any).pointerCount, this.nbrOfPointers);
    gl.uniform2fv((program as any).pointers,  this.pointerCoords);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

// ─── Pointer handler ───────────────────────────────────────────────────────────
class PointerHandler {
  private scale: number;
  private active  = false;
  private pointers = new Map<number, number[]>();
  private lastCoords = [0, 0];
  private moves = [0, 0];

  constructor(element: HTMLCanvasElement, scale: number) {
    this.scale = scale;
    const map = (el: HTMLCanvasElement, sc: number, x: number, y: number) =>
      [x * sc, el.height - y * sc];

    element.addEventListener('pointerdown',  (e) => { this.active = true; this.pointers.set(e.pointerId, map(element, this.scale, e.clientX, e.clientY)); });
    element.addEventListener('pointerup',    (e) => { if (this.count === 1) this.lastCoords = this.first; this.pointers.delete(e.pointerId); this.active = this.pointers.size > 0; });
    element.addEventListener('pointerleave', (e) => { if (this.count === 1) this.lastCoords = this.first; this.pointers.delete(e.pointerId); this.active = this.pointers.size > 0; });
    element.addEventListener('pointermove',  (e) => { if (!this.active) return; this.lastCoords = [e.clientX, e.clientY]; this.pointers.set(e.pointerId, map(element, this.scale, e.clientX, e.clientY)); this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY]; });
  }

  get count()  { return this.pointers.size; }
  get move()   { return this.moves; }
  get coords() { return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [0, 0]; }
  get first()  { return this.pointers.values().next().value ?? this.lastCoords; }
}

// ─── Exported hook ─────────────────────────────────────────────────────────────
export function useShaderBackground() {
  const canvasRef          = useRef<HTMLCanvasElement>(null);
  const animationFrameRef  = useRef<number>(0);
  const rendererRef        = useRef<WebGLRenderer | null>(null);
  const pointersRef        = useRef<PointerHandler | null>(null);

  const resize = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const dpr    = Math.max(1, 0.5 * window.devicePixelRatio);
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    rendererRef.current?.updateScale(dpr);
  };

  const loop = (now: number) => {
    if (!rendererRef.current || !pointersRef.current) return;
    rendererRef.current.updateMouse(pointersRef.current.first);
    rendererRef.current.updatePointerCount(pointersRef.current.count);
    rendererRef.current.updatePointerCoords(pointersRef.current.coords);
    rendererRef.current.updateMove(pointersRef.current.move);
    rendererRef.current.render(now);
    animationFrameRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const dpr    = Math.max(1, 0.5 * window.devicePixelRatio);

    rendererRef.current  = new WebGLRenderer(canvas, dpr);
    pointersRef.current  = new PointerHandler(canvas, dpr);

    resize();
    rendererRef.current.setup();
    rendererRef.current.init();
    loop(0);

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameRef.current);
      rendererRef.current?.reset();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return canvasRef;
}

// ─── Standalone hero component (kept for registry compat) ─────────────────────
interface HeroProps {
  trustBadge?: { text: string; icons?: string[] };
  headline:    { line1: string; line2: string };
  subtitle:    string;
  buttons?: {
    primary?:   { text: string; onClick?: () => void };
    secondary?: { text: string; onClick?: () => void };
  };
  className?: string;
}

const AnimatedShaderHero: React.FC<HeroProps> = ({
  trustBadge, headline, subtitle, buttons, className = '',
}) => {
  const canvasRef = useShaderBackground();

  return (
    <div className={`relative w-full h-full overflow-hidden bg-black ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover touch-none"
        style={{ background: 'black' }}
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        {trustBadge && (
          <div className="mb-8 animate-fade-in-down">
            <div className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 backdrop-blur-md border border-blue-300/20 rounded-full text-sm">
              <span className="text-blue-200">{trustBadge.text}</span>
            </div>
          </div>
        )}

        {(headline.line1 || headline.line2) && (
          <div className="text-center space-y-4 max-w-5xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
              {headline.line1 && <span className="block text-white">{headline.line1}</span>}
              {headline.line2 && <span className="block text-[#3b82f6]">{headline.line2}</span>}
            </h1>
            {subtitle && <p className="text-lg text-white/50 font-light">{subtitle}</p>}
          </div>
        )}

        {buttons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            {buttons.primary && (
              <button onClick={buttons.primary.onClick} className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-2xl font-semibold text-sm transition-all duration-200 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                {buttons.primary.text}
              </button>
            )}
            {buttons.secondary && (
              <button onClick={buttons.secondary.onClick} className="px-8 py-4 bg-white/[0.06] border border-white/10 text-white/70 hover:text-white rounded-2xl font-medium text-sm transition-all duration-200 backdrop-blur-sm">
                {buttons.secondary.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedShaderHero;
