import TodoItem from 'components/TodoItem';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux-hook'
import { Todo } from 'types';
import { selectAllTodos } from './todoSelectors';
import { removeTodo, toggleTodo } from './todoSlice';

const TodoList = () => {
  // const list = useAppSelector(state => state.todos);
  // если использовать селектры то можно отказаться от использования хука useAppSelector
  // а использовать обычный встроенный хук и передавать в него наш созданый селектор
  const list = useSelector(selectAllTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id))
  }

  const handleToggleTodo = (id: Todo['id']) => {
    dispatch(toggleTodo(id))
  }

  return (
    <ul>
      {list.map((todo) => (
        <TodoItem key={todo.id} removeTodo={handleRemoveTodo} toggleTodo={handleToggleTodo} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList;
