import TodoListItem from "./TodoListItem";

function TodoList({ todolist, setTodolist }) {
  return (
    // todolist가 없으면 할일 없음 render
    <div>
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
    </div>
  );
}

export default TodoList;
