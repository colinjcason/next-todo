import React from "react";
import { deleteTask } from "../../../utils/actions";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="btn btn-error btn-xs">
        Delete
      </button>
    </form>
  );
};

export default DeleteForm;
