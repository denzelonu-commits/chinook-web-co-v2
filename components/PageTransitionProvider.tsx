'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

type TransitionContextType = {
  navigateTo: (href: string) => void
}

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
})

export function usePageTransition() {
  return useContext(TransitionContext)
}

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const isAnimating = useRef(false)
  const currentPath = useRef(pathname)

  useEffect(() => {
    currentPath.current = pathname
  }, [pathname])

  const navigateTo = useCallback(
    (href: string) => {
      if (isAnimating.current) return

      // Skip transition if navigating to the same page
      const targetPath = href.split('#')[0] || '/'
      if (targetPath === currentPath.current && targetPath !== '/') return

      isAnimating.current = true
      setVisible(true)

      // Push route just before the overlay fully lands (feels instant)
      setTimeout(() => router.push(href), 280)

      // Start exit animation after a brief hold
      setTimeout(() => {
        setVisible(false)
        isAnimating.current = false
      }, 520)
    },
    [router]
  )

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}

      <AnimatePresence>
        {visible && (
          <motion.div
            key="page-transition-overlay"
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center"
            initial={{ y: '100%' }}
            animate={{
              y: '0%',
              transition: { duration: 0.32, ease: [0.76, 0, 0.24, 1] },
            }}
            exit={{
              y: '-100%',
              transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: 0.06 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.14, duration: 0.26, ease: 'easeOut' },
              }}
              className="flex flex-col items-center select-none"
            >
              <span
                className="text-[clamp(3.5rem,9vw,7rem)] font-black uppercase text-white leading-none tracking-[-0.02em]"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                CHINOOK
              </span>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-px w-10 bg-[#3b82f6]" />
                <span className="text-[11px] tracking-[0.45em] font-semibold uppercase text-[#3b82f6]">
                  WEB CO.
                </span>
                <div className="h-px w-10 bg-[#3b82f6]" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  )
}
