import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "../../../utils/actions";

const Todos = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-xl">No tasks</h1>
      </div>
    );
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg">
          <h2
            className={`text-lg capitalize ${
              task.completed ? "line-through" : null
            }`}>
            {task.content}
          </h2>
          <div className="flex gap-6 items-center">
            <Link
              href={`/todo-list/${task.id}`}
              className="btn btn-accent btn-xs">
              Edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
