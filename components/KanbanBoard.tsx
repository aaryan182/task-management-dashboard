import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useTaskContext } from '@/context/TaskContext'
import { Card, CardContent } from "@/components/ui/card"

export default function KanbanBoard() {
  const { tasks, moveTask } = useTaskContext()
  const columns = ['To Do', 'In Progress', 'Completed']

  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const { draggableId, destination } = result
    moveTask(draggableId, destination.droppableId)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4">
        {columns.map((column) => (
          <div key={column} className="bg-gray-100 p-4 rounded-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">{column}</h3>
            <Droppable droppableId={column}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks
                    .filter((task) => task.status === column)
                    .map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mb-2"
                          >
                            <CardContent className="p-4">
                              <h4 className="font-semibold">{task.title}</h4>
                              <p className="text-sm text-gray-500">Priority: {task.priority}</p>
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  )
}