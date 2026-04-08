import { useEffect, useRef } from 'react'

export default function Metrics() {
  const countRef = useRef<HTMLDivElement>(null)
  const targetValue = 47500000000 // $47.5B

  useEffect(() => {
    let animationFrame: number
    let currentValue = 0
    const duration = 3000 // 3 seconds
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing: cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      currentValue = Math.floor(easeProgress * targetValue)

      if (countRef.current) {
        countRef.current.textContent = `$${currentValue.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}`
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="relative bg-void px-6 py-32 sm:px-8 lg:px-12" id="metrics">
      {/* Subtle glow effect background */}
      <div className="absolute inset-0 bg-gradient-radial from-charcoal/20 via-transparent to-transparent"></div>

      <div className="relative mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="font-mono text-6xl font-semibold text-silver drop-shadow-[0_0_32px_rgba(245,245,247,0.1)] sm:text-7xl lg:text-8xl">
            <div ref={countRef}>$0.00</div>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-gray sm:text-lg">
            The estimated revenue lost by BPOs today due to unrecovered 'Ghost Calls'.
          </p>
        </div>
      </div>
    </section>
  )
}
