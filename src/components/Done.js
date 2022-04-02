import { MdCheckCircleOutline, MdCheckCircle } from "react-icons/md";
import styled from "styled-components";

const CompletedBox = styled.div`
  position: absolute;
  left: 20px;
  margin: 0;
  height: 25px;
  font-size: 22px;
  color: #cd3861;
`;

const InCompletedBox = styled.div`
  position: absolute;
  left: 20px;
  margin: 0;
  height: 25px;
  font-size: 22px;
  color: #cd3861;
`;

function Done({ todo, onCheck }) {
  return (
    <>
      <div onClick={() => onCheck(todo.id)}>
        {todo.checked ? (
          <CompletedBox>
            <MdCheckCircle />
          </CompletedBox>
        ) : (
          <InCompletedBox>
            <MdCheckCircleOutline />
          </InCompletedBox>
        )}
      </div>
      <div
        style={{
          textDecoration: todo.checked ? "line-through" : null,
          color: todo.checked ? "gray" : "black",
        }}
      >
        {todo.text}
      </div>
    </>
  );
}

export default Done;
