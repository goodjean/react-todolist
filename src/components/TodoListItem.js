import { useState } from "react";
import {
  GrFormEdit,
  GrFormClose,
  GrFormCheckmark,
  GrFormTrash,
} from "react-icons/gr";

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
          <div onClick={() => modify()}>
            <GrFormCheckmark />
          </div>
          <div onClick={() => modifyCancel()}>
            <GrFormClose />
          </div>
        </>
      ) : (
        <>
          <div>{todo.text}</div>
          <div onClick={() => setState(true)}>
            <GrFormEdit />
          </div>
          <div onClick={() => btnDelete(todo.id)}>
            <GrFormTrash />
          </div>
        </>
      )}
    </div>
  );
}

export default TodoListItem;
