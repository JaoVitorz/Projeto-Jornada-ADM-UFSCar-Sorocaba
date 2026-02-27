'use client'

import type { ReactNode } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-violet-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="animate-fade-in-up p-6 lg:p-10">{children}</main>
      </div>
    </div>
  )
}
