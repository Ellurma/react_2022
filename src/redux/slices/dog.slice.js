import {createSlice} from "@reduxjs/toolkit";

const initialState = {dogs: [], dogForUpdate: null}

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {name} = action.payload;
            const newDog = {id: new Date().getTime(), name};
            state.dogs.push(newDog)
        },
        deleteDog: (state, action) => {
            const {id} = action.payload;
            const index = state.dogs.findIndex((dog) => dog.id === id)
            state.dogs.splice(index, 1)
        },
        setDogForUpdate: (state,action) => {
            state.dogForUpdate=action.payload.dog
        },
        updateDog:(state,action)=>{
            const {id,name}=action.payload;
            const index = state.dogs.findIndex((dog) => dog.id === id)
            state.dogs[index].name=name
        }
    }

});

const {reducer: dogReducer, actions: {add, deleteDog,setDogForUpdate,updateDog}} = dogSlice;

export default dogReducer;
export const dogActions = {add, deleteDog,setDogForUpdate,updateDog}