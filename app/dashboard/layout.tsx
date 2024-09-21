"use client"

import { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useAuthContext } from '@/components/AuthProvider'

const ProtectedRoute = dynamic(() => import('@/components/ProtectedRoute'), { ssr: false })

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const { logout, user, loading } = useAuthContext()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading spinner
  }

  if (loading) {
    return <div>Loading...</div> // or a more sophisticated loading component
  }

  if (!user) {
    router.push('/login')
    return null
  }

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100">
        <nav className="w-64 bg-white shadow-lg">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <ul>
              <li>
                <Link href="/dashboard" className="block py-2 hover:bg-gray-200">
                  Task List
                </Link>
              </li>
              <li>
                <Link href="/dashboard/kanban" className="block py-2 hover:bg-gray-200">
                  Kanban Board
                </Link>
              </li>
              <li>
                <button onClick={logout} className="block w-full text-left py-2 hover:bg-gray-200">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </ProtectedRoute>
  )
}