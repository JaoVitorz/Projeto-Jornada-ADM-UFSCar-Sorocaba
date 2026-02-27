import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ADM Journey',
  description: 'Plataforma de gestão administrativa e desenvolvimento profissional',
  icons: {
    icon: '/icons/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
