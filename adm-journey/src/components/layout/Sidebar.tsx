'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { path: '/', name: 'Dashboard', icon: '📊' },
  { path: '/academic', name: 'Acadêmico', icon: '📚' },
  { path: '/finance', name: 'Financeiro', icon: '💰' },
  { path: '/summaries', name: 'Resumos', icon: '📈' },
  { path: '/presentations', name: 'Apresentações', icon: '🎤' },
  { path: '/journal', name: 'Diário', icon: '📖' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-72 border-r border-rose-100/70 bg-white/70 p-6 shadow-xl shadow-rose-100/60 backdrop-blur-xl lg:block">
      <div className="rounded-2xl border border-rose-100 bg-white/80 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">Premium mode</p>
        <h1 className="mt-2 text-2xl font-semibold text-rose-600">ADM Journey</h1>
        <p className="mt-2 text-sm text-slate-500">Leve, elegante e profissional para a rotina diária.</p>
      </div>

      <nav className="mt-8 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path

          return (
            <div key={item.path} className="transition-transform duration-200 hover:translate-x-1">
              <Link
                href={item.path}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-rose-100 text-rose-600 font-semibold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100/80'
                }`}
              >
                <span>{item.icon}</span>
                {item.name}
              </Link>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
