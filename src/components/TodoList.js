import TodoListItem from "./TodoListItem";

function TodoList({ todolist, setTodolist }) {
  return (
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
