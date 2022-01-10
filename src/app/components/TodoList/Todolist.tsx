type TodoListProps = {
  todos: any;
  setTodos: any;
};

export default function Todolist({
  todos,
  setTodos,
}: TodoListProps): JSX.Element {
  const handleDelete = ({ id }: any) => {
    setTodos(todos.filter((todo: any) => todo.id !== id));
  };

  const handleComplete = (todo: any) => {
    setTodos(
      todos.map((item: any) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div>
      {todos.map((todo: any) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              Complete
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
