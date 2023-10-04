import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

interface InitialState {
    id: number;
    todo: string;
    isDone: boolean;
}

const initialState: InitialState[] = [];

/* 
name, initialState, reducers를 받아 
리듀서와 상태에 해당하는 액션 생성자와 액션 타입을 자동으로 생성하는 함수
*/

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            return [...state, {
                id: Date.now(),
                todo: action.payload,
                isDone: false
            }]
        },
        handleDone: (state, action) => {
            return state.map((currentState) => {
                if(currentState.id === action.payload) {
                    return {
                        ...currentState,
                        isDone: !currentState.isDone
                    }
                } 
                return currentState;
            })
        },
        handleDelete: (state, action) => {
            return state.filter((currentState) => currentState.id !== action.payload)
        }
    }
})

// state(todo) 값을 추출하거나 가공하는 함수
export const selectSuccessRate = (state : RootState) => {
    const todos = state.todo;
    if(todos.length !== 0) {
        const countSuccess = todos.filter((currentState) => currentState.isDone === true).length;
        return ((countSuccess / todos.length) * 100).toFixed(2);
    }
    return 0;
}

export const { add, handleDone, handleDelete } = todoSlice.actions;

export default todoSlice.reducer;