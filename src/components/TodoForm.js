import { useState } from "react";

let index = 0;

function TodoForm({ setTodolist }) {
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (!todo) {
      return;
    }
    setTodolist((todos) => [...todos, { text: todo, id: index }]);
    setTodo("");
    index++;
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={todo}
        onChange={onChange}
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
