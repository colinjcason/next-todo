import { editTask } from "../../../utils/actions"

const EditForm = ({ task }) => {
  const { id, content, completed } = task

  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-md"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name='content'
        defaultValue={content}
        required
        className="input input-border w-full"
      />
      <div className="form-control my-4">
        <label className="label cursor-pointer" htmlFor="completed">
          <span className="label-text">Completed</span>
          <input 
          type="checkbox" 
          id="completed" 
          defaultChecked={completed} 
          name="completed" 
          className="checkbox checkbox-primary check-box-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">Edit</button>
    </form>
  )
}

export default EditForm