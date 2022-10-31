import AddNewItem from 'components/NewItem';

import { useAppDispatch } from 'redux-hook';
import { addTodo } from './todoSlice';

const NewTodo = () => {
    const dispatch = useAppDispatch();

    const handleNewTodo = (title: string) => {
        dispatch(addTodo(title))
    }

    return (
        <AddNewItem 
            placeholder = "add new todo"
            handleClick={handleNewTodo}
        />
    );
}

export default NewTodo;
