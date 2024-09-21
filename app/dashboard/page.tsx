'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import TaskList from '@/components/TaskList'
import TaskForm from '@/components/TaskForm'
import { TaskProvider } from '@/context/TaskContext'

export default function Dashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <TaskProvider>
      <div>
        <h1 className="text-3xl font-bold mb-4">Task List</h1>
        <Button onClick={() => setIsFormOpen(true)} className="mb-4">
          Add New Task
        </Button>
        <TaskList />
        {isFormOpen && (
          <TaskForm onClose={() => setIsFormOpen(false)} />
        )}
      </div>
    </TaskProvider>
  )
}