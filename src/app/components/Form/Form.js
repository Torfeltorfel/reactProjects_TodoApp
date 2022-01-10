export default function Form(input, setInput, todo, setTodo) {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.prevent.default();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo ..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
}
