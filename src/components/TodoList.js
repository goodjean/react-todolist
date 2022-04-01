import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TodoListBox = styled.div``;

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
        "할 일 없음"
      )}
    </TodoListBox>
  );
}

export default TodoList;
