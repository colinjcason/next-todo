"use client";
import { createTask } from "../../../utils/actions";
import { useFormStatus, useFormState } from "react-dom";

const initialState = {
  message: null
}

const SubmitBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button className="btn btn-primary join-item" type="submit" disabled={pending}>
      {pending ? "Creating..." : "Create task"}  
    </button>
  );
};

const TodoForm = () => {
  const [state, formAction] = useFormState(createTask, initialState)
  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      <div className="join w-full mb-8">
        <input
          type="text"
          className="input input-bordered w-full join-item"
          placeholder="type here"
          name="content"
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TodoForm;