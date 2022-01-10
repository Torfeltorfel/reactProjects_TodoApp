import { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Todolist from './components/TodoList/Todolist';

function App(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<never[]>([]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
