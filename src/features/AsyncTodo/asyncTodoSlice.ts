import { createSlice } from "@reduxjs/toolkit";

import { Todo } from "types";
import { createTodo, fetchAllTodos } from "./todoAsyncActions";

type TodoSlice = {
    status: 'idle' | 'loading' | 'finished' | 'error',
    list: Todo[],
}

const initialState: TodoSlice = {
    status: 'idle',
    list: [],
};

const todoSlice = createSlice({
    name: '@todo',
    initialState,
    reducers: {},
    // чтобы менять состояние слайса нужен екстраредюсер
    extraReducers: (builder) => {
        // билдер автоматически типизирован
        builder
            // первый кейс, при получение всех туду на событии пендинг (в ожидании) меняем статус на лоадинг
            // также можно показать прелоадер если долго грузится
            .addCase(fetchAllTodos.pending, (state) => {
                state.status = 'loading';
            })
            // при событии получение данных (фулфилд) меняем статус и передаем в лист список туду из экшн.пейлоад
            .addCase(fetchAllTodos.fulfilled, (state, action) => {
                state.status = 'finished';
                state.list = action.payload;
            })
            // при ошибке меняем статус, в данном случае не обрабатываем
            .addCase(fetchAllTodos.rejected, (state) => {
                state.status = 'error';
            })
            // обработка события криейт туду. добавляем одну туду которая хранится в пейлоаде
            .addCase(createTodo.fulfilled, (state, action) => {
                state.status = 'finished';
                state.list.push(action.payload);
            })
        
    },
});

export default todoSlice.reducer;
