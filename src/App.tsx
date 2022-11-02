import TodoList from './features/Todo/TodoList'
import NewTodo from "features/Todo/NewTodo";
import './App.css';
import NewAsyncTodo from 'features/AsyncTodo/NewAsyncTodo';
import AsyncTodoList from 'features/AsyncTodo/AsyncTodoList';

function App() {

  return (
    <div className="App">
      <h1>Todo List</h1>
      <NewTodo />
      <TodoList />
      <hr />
      <NewAsyncTodo />
      <AsyncTodoList />
    </div>
  );
}

export default App;
