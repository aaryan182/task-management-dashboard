import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  getTasks,
  createTask,
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask,
} from "../utils/api";
import { useAuthContext } from "@/components/AuthProvider";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => Promise<void>;
  updateTask: (id: string, task: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  moveTask: (taskId: string, newStatus: string) => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const { user } = useAuthContext()

  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        const fetchedTasks = await getTasks()
        setTasks(fetchedTasks)
      }
      fetchTasks()
    }
  }, [user])

  const addTask = async (task: Omit<Task, 'id'>) => {
    const newTask = await createTask(task)
    setTasks([...tasks, newTask])
  }

  const updateTask = async (id: string, updatedFields: Partial<Task>) => {
    const updatedTask = await apiUpdateTask(id, updatedFields)
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task))
  }

  const deleteTask = async (id: string) => {
    await apiDeleteTask(id)
    setTasks(tasks.filter(task => task.id !== id))
  }

  const moveTask = async (taskId: string, newStatus: string) => {
    await updateTask(taskId, { status: newStatus })
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, moveTask }}>
      {children}
    </TaskContext.Provider>
  )
}