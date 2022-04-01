import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

//Form 과 List 의 부모 컴포넌트
function FormAndListContainer() {
  const [todolist, setTodolist] = useState([]);

  return (
    <div>
      <TodoForm setTodolist={setTodolist} />
      <TodoList todolist={todolist} setTodolist={setTodolist} />
    </div>
  );
}

export default FormAndListContainer;
