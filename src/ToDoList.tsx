import { useForm } from "react-hook-form";

function ToDoList() {
  return (
    <div>
      <form>
        <input placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
