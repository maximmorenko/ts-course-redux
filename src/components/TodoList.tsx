import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  list: Todo[],
  toggleTodo: (id: Todo['id']) => void,
  removeTodo: (id: Todo['id']) => void,
}

const TodoList = ({ list, removeTodo, toggleTodo }: TodoListProps) => {
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList;
