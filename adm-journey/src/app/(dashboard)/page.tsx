'use client'

type DashboardCard = {
  title: string
  value: string
  helper: string
}

const dashboardCards: DashboardCard[] = [
  { title: 'Próximas Provas', value: '3', helper: 'Gestão de Pessoas, Marketing e Logística' },
  { title: 'Média Geral', value: '8.7', helper: 'Performance em crescimento contínuo' },
  { title: 'Metas da Semana', value: '5 tarefas', helper: '3 já concluídas com sucesso' },
]

const recentActivities = [
  '✨ Resumo de TGA finalizado com antecedência.',
  '💸 Finanças da semana organizadas e categorizadas.',
  '🗓️ Blocos de foco atualizados para as próximas provas.',
  '🎀 Roteiro visual da apresentação revisado e aprovado.',
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="animate-fade-in-up relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-8 shadow-xl shadow-rose-100/80 backdrop-blur-xl">
        <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-pink-300/35 blur-2xl" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">Jornada com identidade</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-800 md:text-4xl">
          Visual premium com movimento suave e micro-interações elegantes.
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
          A experiência foi refinada para transmitir profissionalismo sem perder leveza e personalidade.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dashboardCards.map((card, index) => (
          <article
            key={card.title}
            className="animate-card-in cursor-pointer rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <h2 className="text-sm text-slate-500">{card.title}</h2>
            <p className="mt-2 text-2xl font-semibold text-rose-600">{card.value}</p>
            <p className="mt-1 text-sm text-slate-500">{card.helper}</p>
          </article>
        ))}
      </section>

      <section className="animate-fade-in-up rounded-3xl border border-white/70 bg-white/75 p-6 shadow-xl shadow-rose-100/70 backdrop-blur-xl [animation-delay:300ms]">
        <h2 className="text-lg font-semibold text-slate-800">Atividades recentes</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {recentActivities.map((activity, index) => (
            <li
              key={activity}
              className="animate-card-in rounded-2xl border border-rose-100/80 bg-gradient-to-r from-white to-rose-50/70 p-4 text-sm text-slate-600"
              style={{ animationDelay: `${220 + index * 120}ms` }}
            >
              {activity}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
