import { useState } from "react";
import styled from "styled-components";
import { GrAdd } from "react-icons/gr";

const TodoFormBox = styled.form`
  background-color: pink;
  display: flex;
  flex-direction: row;
  padding: 20px 77px 20px 72px;
  text-align: center;

  .addBtn {
    padding: 2px 3px 1px 3px;
    cursor: pointer;
  }
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
        maxLength="18"
      />
      <div className="addBtn" onClick={onSubmit}>
        <GrAdd />
      </div>
    </TodoFormBox>
  );
}

export default TodoForm;
