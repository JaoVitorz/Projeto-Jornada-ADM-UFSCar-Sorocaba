const cards = [
  {
    title: 'Média Acadêmica',
    value: '8,9',
    helper: 'Meta superada neste mês',
    accent: 'from-rose-400 to-pink-500',
  },
  {
    title: 'Saldo Disponível',
    value: 'R$ 1.640,00',
    helper: 'Planejamento atualizado hoje',
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    title: 'Tarefas Prioritárias',
    value: '7',
    helper: '3 para concluir até sexta-feira',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Apresentações',
    value: '2',
    helper: 'Próxima em Comunicação Empresarial',
    accent: 'from-sky-400 to-cyan-500',
  },
]

const activities = [
  {
    title: 'Resumo finalizado com excelência',
    description: 'Teoria Geral da Administração entregue com antecedência.',
    icon: '✨',
  },
  {
    title: 'Rotina financeira em dia',
    description: 'Gasto de R$ 82,00 categorizado como material acadêmico.',
    icon: '💸',
  },
  {
    title: 'Planejamento semanal revisado',
    description: 'Blocos de estudo organizados com foco em produtividade.',
    icon: '🗓️',
  },
  {
    title: 'Roteiro de apresentação pronto',
    description: 'Estrutura definida com storytelling e referências visuais.',
    icon: '🎀',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/65 p-8 shadow-xl shadow-rose-100/80 backdrop-blur-xl">
        <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-pink-300/35 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-violet-300/25 blur-2xl" />

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">Jornada com identidade</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-800 md:text-4xl">
          Um dashboard profissional, elegante e feito para inspirar todos os dias.
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
          Acompanhe estudos, finanças e projetos em um ambiente leve com cores suaves, formas orgânicas e foco no seu crescimento.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-rose-100/70 backdrop-blur">
            <div className={`inline-flex rounded-full bg-gradient-to-r ${card.accent} px-3 py-1 text-xs font-semibold text-white`}>
              {card.title}
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-800">{card.value}</p>
            <p className="mt-1 text-sm text-slate-500">{card.helper}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-xl shadow-rose-100/70 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-800">Atividades recentes</h2>
          <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-500">Hoje</span>
        </div>

        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {activities.map((activity) => (
            <li key={activity.title} className="rounded-2xl border border-rose-100/80 bg-gradient-to-r from-white to-rose-50/70 p-4">
              <p className="text-sm font-semibold text-slate-700">
                <span className="mr-2">{activity.icon}</span>
                {activity.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">{activity.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
