const cards = [
  {
    title: 'Média Acadêmica',
    value: '8,5',
    helper: 'Meta para o semestre: 8,0',
    color: 'text-blue-600',
  },
  {
    title: 'Saldo Disponível',
    value: 'R$ 1.250,00',
    helper: 'Última atualização: hoje',
    color: 'text-green-600',
  },
  {
    title: 'Tarefas Pendentes',
    value: '12',
    helper: '4 com prazo até amanhã',
    color: 'text-purple-600',
  },
  {
    title: 'Apresentações',
    value: '3',
    helper: 'Próxima em 5 dias',
    color: 'text-orange-600',
  },
]

const activities = [
  '✅ Entregou o resumo de Teoria Geral da Administração.',
  '💸 Registrou gasto de R$ 82,00 com materiais de estudo.',
  '📚 Atualizou planejamento da semana acadêmica.',
  '🎤 Criou roteiro da apresentação de Marketing.',
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-bold text-gray-900">Bem-vinda ao ADM Journey</h1>
        <p className="mt-2 text-sm text-gray-600">
          Acompanhe sua jornada acadêmica, financeira e profissional em um único painel.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-sm font-semibold text-gray-600">{card.title}</h2>
            <p className={`mt-2 text-3xl font-bold ${card.color}`}>{card.value}</p>
            <p className="mt-2 text-xs text-gray-500">{card.helper}</p>
          </article>
        ))}
      </section>

      <section className="rounded-lg bg-white p-6 shadow">
        <h2 className="text-lg font-semibold text-gray-800">Atividades Recentes</h2>
        <ul className="mt-4 space-y-3 text-sm text-gray-700">
          {activities.map((activity) => (
            <li key={activity} className="rounded-md border border-gray-100 bg-gray-50 p-3">
              {activity}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
