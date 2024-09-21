import { useState } from "react";
import { useTaskContext } from "@/context/TaskContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface TaskFormProps {
  onClose: () => void;
  initialTask?: any;
}

export default function TaskForm({ onClose, initialTask }: TaskFormProps) {
  const { addTask, updateTask } = useTaskContext();
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(
    initialTask?.description || ""
  );
  const [status, setStatus] = useState(initialTask?.status || "To Do");
  const [priority, setPriority] = useState(initialTask?.priority || "Medium");
  const [dueDate, setDueDate] = useState(initialTask?.dueDate || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const task = { title, description, status, priority, dueDate };
    if (initialTask) {
      await updateTask(initialTask.id, task);
    } else {
      await addTask(task);
    }
    onClose();
  };
  

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialTask ? "Edit Task" : "Add New Task"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="To Do">To Do</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger>
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <Button type="submit">Save Task</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
