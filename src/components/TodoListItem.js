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
  margin-right: 65px;
  margin-bottom: 10px;
  margin-top: 10px;

  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 6px;

  background-color: #ffdfdc;
  input {
    width: 255px;
    height: 18px;
    border: 1px solid white;
    border-radius: 3px;
    &:focus {
      outline: none;
      border-color: #aa1eaa;
    }

    font-family: "Pangolin", sans-serif;
  }
`;

const EditBtnBox = styled.div`
  position: absolute;
  right: 50px;
  margin: 0;
  height: 25px;
  font-size: 22px;
`;

const TrashBtnBox = styled.div`
  position: absolute;
  right: 20px;
  margin: 0;
  height: 24px;
  font-size: 22px;
`;

const CheckBtnBox = styled.div`
  position: absolute;
  right: 50px;
  margin: 0;
  height: 25px;
  font-size: 22px;
  border-bottom: 2px solid #64cd3c;
`;

const CloseBtnBox = styled.div`
  position: absolute;
  right: 20px;
  margin: 0;
  height: 24px;
  font-size: 22px;
  border-bottom: 2px solid #cd1039;
`;

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
            maxLength="18"
            value={newTodo}
            onChange={({ target }) => {
              setNewTodo(target.value);
            }}
          ></input>

          <CheckBtnBox onClick={() => modify()}>
            <GrFormCheckmark />
          </CheckBtnBox>

          <CloseBtnBox onClick={() => modifyCancel()}>
            <GrFormClose />
          </CloseBtnBox>
        </>
      ) : (
        <>
          <div>{todo.text}</div>
          <EditBtnBox onClick={() => setState(true)}>
            <GrFormEdit />
          </EditBtnBox>
          <TrashBtnBox onClick={() => btnDelete(todo.id)}>
            <GrFormTrash />
          </TrashBtnBox>
        </>
      )}
    </TodoListItemBox>
  );
}

export default TodoListItem;
