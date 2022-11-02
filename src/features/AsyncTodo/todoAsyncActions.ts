import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "types";

export const fetchAllTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

        return (await response.json()) as Todo[];
    }
);

export const createTodo = createAsyncThunk(
    'todos/createTodo',
    async (text: string) => {
        const newTodo: Required<Omit<Todo, 'id'>> = {
            // исключили id и все поля обязательны
            title: text,
            userId: 1,
            completed: false,
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Conetnt-type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        });

        return (await response.json()) as Todo; //уже с id
    }
);
// все это можно обернуть в трай кетч и возвращать еще чтото  
