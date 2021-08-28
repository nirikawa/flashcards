import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topics: {}
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const topic = {...action.payload, quizIds: []};
            state.topics[action.payload.id] = topic;
        }

        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].push(action.payload.quizId);
        }
    }
})

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;