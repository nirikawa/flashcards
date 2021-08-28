import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quizzes: {}
}

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            const quiz = {...action.payload};
            state.quizzes[action.payload.id] = quiz;
        }
    }
})

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;