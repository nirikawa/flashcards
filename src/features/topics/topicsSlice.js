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
    }
})

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;