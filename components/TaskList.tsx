import { useTaskContext } from '@/context/TaskContext'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function TaskList() {
  const { tasks, deleteTask } = useTaskContext()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.status}</TableCell>
            <TableCell>{task.priority}</TableCell>
            <TableCell>{task.dueDate}</TableCell>
            <TableCell>
              <Button onClick={() => {/* Implement edit logic */}} className="mr-2">Edit</Button>
              <Button onClick={() => deleteTask(task.id)} variant="destructive">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
