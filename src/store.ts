import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    // ждем редюсеры
});

export const store = configureStore({
    reducer: rootReducer,
});

// нужно типизировать стейт, как правило название RootState
// а типом является утилита ReturnType, дженерик типа корневого редюсера
// export type RootState = ReturnType<typeof rootReducer>

// либо это можно сделать обращаясь к стору и его методу getState
export type RootState = ReturnType<typeof store.getState>;

// для диспача тоже нужен конкретный тип и он тоже будет определяться автоматически
export type AppDispatch = typeof store.dispatch;

