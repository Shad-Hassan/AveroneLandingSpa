"use client"

import { FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa"

export default function Hero() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="bg-black px-6 pt-32 md:pt-44 pb-6 overflow-x-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-4 md:gap-5 items-stretch">

            {/* MASCOT CARD — left column, dominant */}
            {/* overflow-visible lets the mascot break out of the card boundary.
                z-10 ensures the overflow renders above the grid gap and sibling cards. */}
            <div className="col-span-12 md:col-span-5 relative rounded-3xl overflow-visible min-h-72 md:min-h-160 z-10">
              {/* ambient glow behind the mascot */}
              <div className="absolute inset-0 rounded-3xl flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="w-96 h-96 rounded-full bg-white/[0.07] blur-3xl" />
              </div>
              {/* mascot: anchored to card bottom, overflows top and sides */}
              <img
                src="/AvaroneMascot.png"
                alt="Averon Guardian Mascot"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] h-auto object-contain select-none pointer-events-none
                           drop-shadow-[0_0_120px_rgba(245,245,247,0.35)]"
                
              />
            </div>

            {/* RIGHT COLUMN — stacked cards */}
            <div className="col-span-12 md:col-span-7 flex flex-col gap-4 md:gap-5">

              {/* HEADLINE CARD — contains eyebrow, headline, subtext, and CTAs */}
              <div className="rounded-3xl bg-charcoal border border-platinum/10 p-8 md:p-10 flex-1 flex flex-col gap-8">

                {/* Top row: eyebrow + enterprise badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-platinum/70 animate-pulse shrink-0" />
                    <p className="text-gray text-[10px] uppercase tracking-[0.5em]">
                      Authority & Precision
                    </p>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray/50 border border-platinum/10 px-3 py-1.5 rounded-full">
                    Enterprise
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-[3.25rem] font-black text-platinum leading-[0.92] tracking-tighter italic uppercase">
                  Stop Guessing.<br />
                  <span className="bg-linear-to-r from-gray/55 to-gray/15 bg-clip-text text-transparent">
                    Start Closing.
                  </span>
                </h1>

                {/* Subtext */}
                <div className="flex items-stretch gap-5">
                  <div className="w-px bg-platinum/20 rounded-full shrink-0" />
                  <p className="text-sm md:text-base text-gray leading-relaxed">
                    The high-precision intelligence layer for Exclusive Live Calls.
                    We don&apos;t just track leads; we automate their outcome.
                  </p>
                </div>

                {/* CTAs — pinned to the bottom of the card */}
                <div className="grid grid-cols-2 gap-3 mt-auto">

                  <div
                    className="col-span-1 rounded-2xl p-px"
                    style={{
                      background: "conic-gradient(from var(--border-angle), transparent 20%, rgba(255,255,255,0.9) 50%, transparent 80%)",
                      animation: "border-rotate 3.5s linear infinite",
                    }}
                  >
                    <button className="w-full px-6 py-4 bg-black text-platinum font-bold uppercase tracking-widest text-[10px] rounded-[15px] hover:bg-white/5 active:scale-95 transition-all duration-200">
                      Initialize Guardian
                    </button>
                  </div>

                  <div
                    className="col-span-1 rounded-2xl p-px"
                    style={{
                      background: "conic-gradient(from var(--border-angle), transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%)",
                      animation: "border-rotate 3.5s linear infinite",
                      animationDelay: "-1.75s",
                    }}
                  >
                    <button className="w-full px-6 py-4 bg-charcoal text-platinum font-bold uppercase tracking-widest text-[10px] rounded-[15px] hover:bg-white/5 transition-all duration-200">
                      Learn More
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO SECTION ────────────────────────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16">
            <p className="text-gray text-sm md:text-base uppercase tracking-[0.5em] mb-6">
              Premium Features
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-platinum leading-tight">
              Enterprise Grade Intelligence
              <br />
              at $10,000/Month
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* ROW 1 */}
            <div className="col-span-12 md:col-span-8 p-8 md:p-10 rounded-2xl md:rounded-3xl bg-charcoal border border-platinum/10 flex flex-col justify-between min-h-70">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-platinum mb-4">
                  Real-Time Call Intelligence
                </h3>
                <p className="text-sm md:text-lg leading-relaxed text-gray mb-6">
                  AI-powered insights during every call. Detect objections,
                  identify opportunities, and close deals faster.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-platinum rounded-full animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-platinum/80">Live Processing</span>
                </div>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray/60">
                Enterprise AI Engine
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-platinum text-black flex flex-col justify-between min-h-70">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3">Lead Scoring</h3>
                <p className="text-xs md:text-sm leading-relaxed text-black/80">
                  Automatic qualification system
                </p>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-black/60">
                Precision Targeting
              </div>
            </div>

            {/* ROW 2 */}
            <div className="col-span-12 md:col-span-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-charcoal border border-platinum/10 flex flex-col justify-between min-h-60">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-platinum mb-3">Integration Hub</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray">
                  Connects your entire tech stack
                </p>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray/60">
                Seamless Workflow
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-platinum text-black flex flex-col justify-between min-h-60">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3">Analytics Dashboard</h3>
                <p className="text-xs md:text-sm leading-relaxed text-black/80">
                  Track performance metrics
                </p>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-black/60">
                Data Insights
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-charcoal border border-platinum/10 flex flex-col justify-between min-h-60">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-platinum mb-3">24/7 Support</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray">
                  Dedicated support team
                </p>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray/60">
                Always Available
              </div>
            </div>

            {/* ROW 3 */}
            <div className="col-span-12 md:col-span-8 p-8 md:p-10 rounded-2xl md:rounded-3xl bg-linear-to-br from-platinum to-platinum/90 text-black flex flex-col justify-between min-h-70">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform?</h3>
                <p className="text-sm md:text-base leading-relaxed text-black/80 mb-6">
                  Join elite companies using Averon to close more deals and
                  automate their sales process.
                </p>
                <div className="flex justify-center gap-6 mb-6">
                  <div className="flex flex-col items-center">
                    <FaRocket className="text-2xl mb-2 text-black/70" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-black/70">Accelerate</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaShieldAlt className="text-2xl mb-2 text-black/70" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-black/70">Secure</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaChartLine className="text-2xl mb-2 text-black/70" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-black/70">Analyze</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-black text-platinum font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                  Start Free Trial
                </button>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-black/60">
                Enterprise Ready
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 grid grid-cols-1 gap-4">
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-charcoal border border-platinum/10 flex flex-col justify-between min-h-30">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-platinum mb-2">CRM Integration</h3>
                  <p className="text-xs leading-relaxed text-gray">Seamless connection</p>
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray/60">Unified Platform</div>
              </div>

              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-platinum text-black flex flex-col justify-between min-h-30">
                <div>
                  <h3 className="text-sm md:text-base font-bold mb-2">Custom Workflows</h3>
                  <p className="text-xs leading-relaxed text-black/80">Tailored automation</p>
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-black/60">Flexible Solutions</div>
              </div>

              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-charcoal border border-platinum/10 flex flex-col justify-between min-h-30">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-platinum mb-2">Advanced Reporting</h3>
                  <p className="text-xs leading-relaxed text-gray">Comprehensive analytics</p>
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray/60">Performance Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
