import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styled from "styled-components";

const FormListContainerBox = styled.div`
  .restTodo {
    color: #acf3ff;
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;
    padding-right: 22px;
  }
`;

//Form 과 List 의 부모 컴포넌트
function FormAndListContainer() {
  const [todolist, setTodolist] = useState([]);

  return (
    <FormListContainerBox>
      <div className="restTodo">할 일 {todolist.length}개 남음</div>
      <TodoForm setTodolist={setTodolist} todolist={todolist} />
      <TodoList todolist={todolist} setTodolist={setTodolist} />
    </FormListContainerBox>
  );
}

export default FormAndListContainer;
