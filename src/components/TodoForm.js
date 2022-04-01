import { useState } from "react";
import styled from "styled-components";

const TodoFormBox = styled.form`
  background-color: white;
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 20px;
  overflow-y: auto;
  text-align: center;
`;

// todo의 id값
let index = 0;

function TodoForm({ todolist, setTodolist }) {
  const [todo, setTodo] = useState("");

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!todo) {
      return;
    }
    if (todolist.length > 5) {
      return;
    }
    setTodolist((todos) => [...todos, { text: todo, id: index }]);
    setTodo("");
    index++;
  };
  return (
    <TodoFormBox onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={todo}
        onChange={onChange}
        size="35"
      />
      <button>Add</button>
    </TodoFormBox>
  );
}

export default TodoForm;
