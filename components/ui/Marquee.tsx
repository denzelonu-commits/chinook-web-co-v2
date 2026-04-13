'use client'

import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  /** Reverse scroll direction */
  reverse?: boolean
  /** Pause the animation when the user hovers */
  pauseOnHover?: boolean
  /** Seconds to complete one full loop */
  speed?: number
}

/**
 * Infinite horizontal marquee.
 * Renders `children` twice side-by-side so the seam is invisible.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = 40,
}: MarqueeProps) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max gap-4',
          reverse ? 'animate-marquee-right' : 'animate-marquee-left',
          pauseOnHover && '[&:hover]:[animation-play-state:paused]'
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* First copy */}
        <div className="flex gap-4">{children}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-4" aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}
