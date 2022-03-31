function TodoListItem({ todo, todolist, setTodolist }) {
  const btnDelete = (key) => {
    setTodolist(todolist.filter((todo) => todo.id !== key));
  };
  return (
    <>
      <div>{todo.text}</div>
      <button onClick={() => btnDelete(todo.id)}>삭제</button>
    </>
  );
}

export default TodoListItem;
