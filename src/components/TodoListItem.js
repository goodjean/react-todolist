import { useState } from "react";

function TodoListItem({ todo, todolist, setTodolist }) {
  const [newTodo, setNewTodo] = useState(todo.text);
  const [state, setState] = useState(false);

  //삭제버튼 로직
  const btnDelete = (key) => {
    setTodolist(todolist.filter((todo) => todo.id !== key));
  };

  //기존 state를 newstate로 리스트에 추가하는 로직
  const btnChange = (key, newTodo) => {
    setTodolist(
      todolist.map((todo) => ({
        ...todo,
        text: todo.id === key ? newTodo : todo.text,
      }))
    );
  };

  //수정확인버튼 로직
  const modify = () => {
    btnChange(todo.id, newTodo);
    setState(false);
  };

  //수정취소버튼 로직
  const modifyCancel = () => {
    setState(false);
  };

  return (
    // state가 true면 수정창 띄우고 아니면 state랑 수정삭제버튼 렌더
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
