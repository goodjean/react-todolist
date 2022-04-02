import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TodoListBox = styled.div`
  padding-left: 10px;
  padding-right: 12px;
  font-family: "Pangolin", sans-serif;
  font-family: "Indie Flower", cursive;
  font-family: "Poor Story", cursive;
  .none-todo {
    color: #800080;
    text-align: center;
    font-family: "Indie Flower", cursive;
    font-family: "Poor Story", cursive;
  }
`;

function TodoList({ todolist, setTodolist }) {
  return (
    // todolist가 없으면 할일 없음 render
    <TodoListBox>
      {todolist.length > 0 ? (
        <ul>
          {todolist.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              setTodolist={setTodolist}
              todolist={todolist}
            />
          ))}
        </ul>
      ) : (
        <div className="none-todo">
          <br /> -- 할 일 없음 --
        </div>
      )}
    </TodoListBox>
  );
}

export default TodoList;
