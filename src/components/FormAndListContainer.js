import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function FormAndListContainer() {
  const [todolist, setTodolist] = useState([]);
  console.log(todolist);
  return (
    <div>
      <TodoForm setTodolist={setTodolist} />
      <TodoList todolist={todolist} setTodolist={setTodolist} />
    </div>
  );
}

export default FormAndListContainer;
