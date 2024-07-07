import Link from "next/link"
import { getTask } from "../../../../utils/actions"
import EditForm from "@/app/components/EditForm"

const SingleTodo = async ({ params }) => {
  const task = await getTask(params.id)
  return (
    <>
      <div className="mb-16">
        <Link href="/todo-list" className="btn btn-accent">Back</Link>
      </div>
      <EditForm task={task} />
    </>
  )
}

export default SingleTodo