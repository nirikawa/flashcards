import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topics: {}
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon,
                quizIds: []
            };
        },

        addQuizIdForTopic: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
            // state.topics["quizIds"] = action.payload.id;
        }
    }
})

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export default topicsSlice.reducer;