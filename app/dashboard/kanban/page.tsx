'use client'

import KanbanBoard from '@/components/KanbanBoard'
import { TaskProvider } from '@/context/TaskContext'

export default function KanbanPage() {
  return (
    <TaskProvider>
      <div>
        <h1 className="text-3xl font-bold mb-4">Kanban Board</h1>
        <KanbanBoard />
      </div>
    </TaskProvider>
  )
}