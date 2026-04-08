export default function NavCta() {
  return (
    <button
      onClick={() => {
        const contact = document.getElementById('contact')
        if (contact) contact.scrollIntoView({ behavior: 'smooth' })
      }}
      className="px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 whitespace-nowrap bg-platinum text-black hover:bg-silver active:scale-95"
      onMouseEnter={e => {
        const target = e.currentTarget
        target.style.transform = 'translateY(-2px)'
        target.style.boxShadow = '0 8px 24px rgba(245, 245, 247, 0.15)'
      }}
      onMouseLeave={e => {
        const target = e.currentTarget
        target.style.transform = 'translateY(0)'
        target.style.boxShadow = 'none'
      }}
    >
      BOOK AUDIT
    </button>
  )
}
