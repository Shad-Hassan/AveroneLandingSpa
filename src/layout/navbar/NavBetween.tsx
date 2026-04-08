import { NAV_ITEMS } from '@/lib/navbarItem'

interface NavBetweenProps {
  active: string
  registerEl: (id: string, el: HTMLAnchorElement) => void
  scrollTo: (href: string) => void
}

export default function NavBetween({
  active,
  registerEl,
  scrollTo
}: NavBetweenProps) {
  return (
    <div className="flex items-center gap-1 lg:gap-2">
      {NAV_ITEMS.map(item => (
        <a
          key={item.id}
          ref={el => el && registerEl(item.id, el)}
          href={item.href}
          onClick={e => {
            e.preventDefault()
            scrollTo(item.href)
          }}
          className="px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 text-sm lg:text-base font-medium whitespace-nowrap no-underline"
          style={{
            color: active === item.id ? '#ffffff' : '#86868b',
            background: active === item.id ? 'rgba(245, 245, 247, 0.08)' : 'transparent'
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
