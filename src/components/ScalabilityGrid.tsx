export default function ScalabilityGrid() {
  const cards = [
    {
      icon: '⚙️',
      title: 'Workflow Dominance',
      description: 'Automated ticket generation for every missed lead. No manual entry.'
    },
    {
      icon: '🎯',
      title: 'Marketing Synergy',
      description: 'Seamless sync with your existing CRM infrastructure.'
    },
    {
      icon: '📊',
      title: 'Financial Truth',
      description: 'Real-time vendor ranking based on close-rate and response velocity.'
    }
  ]

  return (
    <section className="bg-black px-6 py-32 sm:px-8 lg:px-12" id="scalability">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gray mb-4">The Tech Stack</p>
          <h2 className="text-4xl font-semibold text-platinum sm:text-5xl">Scalability Grid</h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-charcoal bg-charcoal/50 p-8 transition-all duration-400 hover:scale-105 sm:p-10 cursor-pointer"
              style={{
                transitionDuration: 'var(--transition-premium, 400ms)',
                '--transition-premium': '400ms cubic-bezier(0.4, 0, 0.2, 1)'
              } as React.CSSProperties}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-silver/5 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="text-4xl">{card.icon}</div>
                <h3 className="text-xl font-semibold text-silver sm:text-2xl">{card.title}</h3>
                <p className="leading-relaxed text-gray">{card.description}</p>
              </div>

              {/* Subtle border accent on hover */}
              <div className="absolute inset-0 rounded-2xl border border-silver/10 opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
