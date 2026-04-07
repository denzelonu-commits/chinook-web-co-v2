interface LogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}

export function ChinookLogo({ className = "", size = 40, showWordmark = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Chinook Web Co. logo mark"
      >
        {/* Chinook arch — the warm-wind arc over Calgary */}
        <path
          d="M6 16 Q20 2 34 16"
          stroke="#3b82f6"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Mountain W — three peaks forming the letterform */}
        {/* Left peak */}
        <polyline
          points="4,34 11,20 16,28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Center peak — tallest, the iconic summit */}
        <polyline
          points="16,28 20,18 24,28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right peak */}
        <polyline
          points="24,28 29,20 36,34"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Base line */}
        <line
          x1="4"
          y1="34"
          x2="36"
          y2="34"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>

      {showWordmark && (
        <span className="text-white font-semibold tracking-tight leading-none">
          <span className="text-[#3b82f6]">Chinook</span> Web Co.
        </span>
      )}
    </div>
  );
}

export function ChinookWordmark({ className = "", size = "default" }: { className?: string; size?: "sm" | "default" | "lg" }) {
  const textSize = {
    sm: "text-base",
    default: "text-xl",
    lg: "text-3xl",
  }[size];

  const logoSize = {
    sm: 28,
    default: 36,
    lg: 48,
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <ChinookLogo size={logoSize} />
      <span className={`font-semibold tracking-tight leading-none ${textSize}`}>
        <span className="text-[#3b82f6]">Chinook</span>
        <span className="text-white"> Web Co.</span>
      </span>
    </div>
  );
}
