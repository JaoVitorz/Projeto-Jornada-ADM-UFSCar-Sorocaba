export function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/40 bg-white/60 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400">Bom te ver por aqui ✨</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-700">Seu espaço de evolução</h2>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-full bg-white/80 px-3 py-2 text-sm text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-rose-500">
            🔔
          </button>
          <button className="rounded-full bg-white/80 px-3 py-2 text-sm text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-rose-500">
            ⚙️
          </button>
          <button className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-2 text-sm text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:from-rose-600 hover:to-pink-600">
            👤
          </button>
        </div>
      </div>
    </header>
  )
}
