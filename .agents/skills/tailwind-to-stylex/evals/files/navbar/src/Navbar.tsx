const links = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/docs', label: 'Docs' },
]

export function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 dark:bg-gray-900">
      <span className="text-lg font-bold text-gray-900 dark:text-white">Acme</span>

      <div className="flex items-center space-x-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {link.label}
            <span className="ml-1 opacity-0 transition-opacity group-hover:opacity-100">→</span>
          </a>
        ))}
      </div>

      <button className="rounded-md bg-blue-600 px-[18px] py-2 text-sm font-semibold text-white">
        Sign in
      </button>
    </nav>
  )
}
