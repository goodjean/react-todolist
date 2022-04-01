import { useState } from "react";
import {
  GrFormEdit,
  GrFormClose,
  GrFormCheckmark,
  GrFormTrash,
} from "react-icons/gr";
import styled from "styled-components";

const TodoListItemBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0;
  margin-right: 40px;
  margin-bottom: 10px;
  margin-top: 10px;

  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 2px;

  background-color: #ffdfdc;
`;

const EditBtn = styled.div``;

const TrashBtn = styled.div``;

const CheckBtn = styled.div``;

const CloseBtn = styled.div``;

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
    <TodoListItemBox>
      {state ? (
        <>
          <input
            type="text"
            value={newTodo}
            onChange={({ target }) => {
              setNewTodo(target.value);
            }}
          ></input>

          <CheckBtn onClick={() => modify()}>
            <GrFormCheckmark />
          </CheckBtn>

          <CloseBtn onClick={() => modifyCancel()}>
            <GrFormClose />
          </CloseBtn>
        </>
      ) : (
        <>
          <div>{todo.text}</div>
          <EditBtn onClick={() => setState(true)}>
            <GrFormEdit />
          </EditBtn>
          <TrashBtn onClick={() => btnDelete(todo.id)}>
            <GrFormTrash />
          </TrashBtn>
        </>
      )}
    </TodoListItemBox>
  );
}

export default TodoListItem;
