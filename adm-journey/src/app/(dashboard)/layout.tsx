import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard - ADM Journey',
  description: 'Dashboard principal',
}

const navItems = [
  { href: '/academic', label: 'Acadêmico', icon: '📚' },
  { href: '/finance', label: 'Financeiro', icon: '💰' },
  { href: '/summaries', label: 'Resumos', icon: '📊' },
  { href: '/presentations', label: 'Apresentações', icon: '🎤' },
  { href: '/journal', label: 'Diário', icon: '📖' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-violet-100 text-slate-800">
      <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-pink-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />

      <aside className="relative z-10 hidden w-72 border-r border-white/40 bg-white/60 p-6 shadow-xl shadow-rose-100/70 backdrop-blur-xl lg:block">
        <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">Painel pessoal</p>
          <h1 className="mt-2 text-2xl font-semibold text-rose-600">ADM Journey</h1>
          <p className="mt-2 text-sm text-slate-500">
            Organização acadêmica com um toque delicado, criativo e profissional.
          </p>
        </div>

        <nav className="mt-8 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-white/90 hover:text-rose-600"
            >
              <span className="text-base transition group-hover:scale-110">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="relative z-10 flex-1 overflow-auto">
        <header className="sticky top-0 z-20 border-b border-white/40 bg-white/55 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400">Bom te ver por aqui ✨</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-700">Seu espaço de evolução</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-full bg-white/80 px-3 py-2 text-sm text-slate-500 shadow-sm transition hover:text-rose-500">🔔</button>
              <button className="rounded-full bg-white/80 px-3 py-2 text-sm text-slate-500 shadow-sm transition hover:text-rose-500">⚙️</button>
              <button className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-2 text-sm text-white shadow-sm transition hover:from-rose-600 hover:to-pink-600">
                👤
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl p-6 lg:p-10">{children}</div>
      </main>
    </div>
  )
}
