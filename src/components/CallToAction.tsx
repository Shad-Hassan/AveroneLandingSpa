export default function CallToAction() {
  return (
    <section className="relative overflow-hidden px-6 py-32 sm:px-8 lg:px-12">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-void via-charcoal to-black"></div>

      {/* Mascot watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none w-96 h-96">
        <img
          src="/AvaroneMascot.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl">
        <div className="space-y-12 text-center">
          <h2 className="text-4xl font-semibold leading-tight text-platinum sm:text-5xl lg:text-6xl">
            Ready to integrate Averon?
          </h2>

          <button className="inline-flex items-center justify-center rounded-full bg-platinum px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-silver active:scale-95 sm:px-12 sm:py-5 sm:text-lg">
            BOOK INFRASTRUCTURE AUDIT
          </button>
        </div>
      </div>
    </section>
  )
}
