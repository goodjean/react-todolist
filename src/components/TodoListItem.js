import { useState } from "react";

function TodoListItem({ todo, todolist, setTodolist }) {
  const [newTodo, setNewTodo] = useState(todo.text);
  const [state, setState] = useState(false);
  const btnDelete = (key) => {
    setTodolist(todolist.filter((todo) => todo.id !== key));
  };
  const btnChange = (key, newTodo) => {
    setTodolist(
      todolist.map((todo) => ({
        ...todo,
        text: todo.id === key ? newTodo : todo.text,
      }))
    );
  };
  const modify = () => {
    btnChange(todo.id, newTodo);
    setState(false);
  };
  const modifyCancel = () => {
    setState(false);
  };
  return (
    <div>
      {state ? (
        <>
          <input
            type="text"
            value={newTodo}
            onChange={({ target }) => {
              setNewTodo(target.value);
            }}
          ></input>
          <button onClick={() => modify()}>수정확인</button>
          <button onClick={() => modifyCancel()}>수정취소</button>
        </>
      ) : (
        <>
          <div>{todo.text}</div>
          <button onClick={() => setState(true)}>수정</button>
          <button onClick={() => btnDelete(todo.id)}>삭제</button>
        </>
      )}
    </div>
  );
}

export default TodoListItem;
