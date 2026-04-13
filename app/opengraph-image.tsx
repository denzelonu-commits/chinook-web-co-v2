import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Chinook Web Co. | Calgary Web Design'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Subtle radial glow — top-right */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '640px',
            height: '400px',
            background:
              'radial-gradient(ellipse at 80% 20%, rgba(224,123,42,0.18) 0%, transparent 65%)',
          }}
        />

        {/* Top row: wordmark + location pill */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Wordmark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Logo mark — C in a square */}
            <div
              style={{
                width: '48px',
                height: '48px',
                background: '#E07B2A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                fontWeight: 900,
                color: '#fff',
                letterSpacing: '-0.02em',
              }}
            >
              C
            </div>
            <span
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Chinook Web Co.
            </span>
          </div>

          {/* Location pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            Calgary, AB
          </div>
        </div>

        {/* Centre: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#E07B2A',
            }}
          >
            Calgary&apos;s Digital Engineering Studio
          </div>
          <div
            style={{
              fontSize: '80px',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            Websites That Get{' '}
            <span style={{ color: '#E07B2A' }}>Customers</span>
            <br />
            Through the Door.
          </div>
        </div>

        {/* Bottom row: value props */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {[
            'Free mockup',
            'Live in 3–14 days',
            'You own the code',
            'Lighthouse 95+',
          ].map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.04em',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#E07B2A',
                  borderRadius: '50%',
                }}
              />
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
