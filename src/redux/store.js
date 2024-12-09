// redux/store.js

import { createStore } from 'redux';

// A simple reducer to test Redux setup
const initialState = {
    notes: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter((_, index) => index !== action.payload)
            };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;
