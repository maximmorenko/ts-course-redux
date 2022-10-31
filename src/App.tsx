import TodoList from './features/Todo/TodoList'
import NewTodo from "features/Todo/NewTodo";
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Todo List</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
