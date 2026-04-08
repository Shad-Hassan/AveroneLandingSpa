interface NavStartProps {
  registerEl: (id: string, el: HTMLAnchorElement) => void
  scrollTo: (href: string) => void
}

export default function NavStart({
  registerEl,
  scrollTo
}: NavStartProps) {
  return (
    <a
      ref={el => el && registerEl('logo', el)}
      href="#hero"
      onClick={e => {
        e.preventDefault()
        scrollTo('#hero')
      }}
      className="flex-shrink-0 inline-flex items-center hover:opacity-80 transition-opacity"
    >
      <img
        src="/AVERONE.png"
        alt="Averon Logo"
        className="h-10 md:h-12 w-auto aspect-[666/375] max-w-[180px]"
      />
    </a>
  )
}
