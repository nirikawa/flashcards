import { createSlice } from '@reduxjs/toolkit';
import { addQuizIdForTopic } from '../topics/topicsSlice';

const initialState = {
    quizzes: {}
}

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
})

export const thunkQuiz = (quiz) => {
    const {topicId, id } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdForTopic({topicId: topicId, quizId: id}));
    };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz, createNewQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;