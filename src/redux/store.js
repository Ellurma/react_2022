import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReduser from "./slices/cat.slice";
import dogReducer from "./slices/dog.slice";

const rootReducer = combineReducers({
    cats: catReduser,
    dogs: dogReducer
});

const store = configureStore({
    reducer: rootReducer
})

export default store

