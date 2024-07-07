import TodoForm from "@/app/components/TodoForm"
import Todos from "@/app/components/Todos"

const TodoList = () => {
  return (
    <div className="max-w-lg">
      <TodoForm />
      <Todos />
    </div>
  )
}

export default TodoList