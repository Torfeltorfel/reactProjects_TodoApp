import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';

type FormProps = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  todos: string[];
  setTodos: any;
};

export default function Form({
  input,
  setInput,
  todos,
  setTodos,
}: FormProps): JSX.Element {
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event: any) => {
    event.prevent.default();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput('');
    console.log(input);
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
