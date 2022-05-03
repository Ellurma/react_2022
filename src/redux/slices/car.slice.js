import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    carForUpdate: null,
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}) => {
        const {data} = await carService.create(car);
        return data
    }
);

const deleteById = createAsyncThunk(
    'deleteById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);

const updateById = createAsyncThunk(
    'updateById',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car);
            dispatch(updateCar({id, car}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        deleteCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars.splice(index, 1)
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars[index] = {...state.cars[index], ...action.payload.car}
            state.carForUpdate = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
            .addCase(create.rejected, (state, action) => {
                const {status} = action.payload
                state.status = status
            })
            .addCase(deleteById.rejected, (state, action) => {
                const {status} = action.payload
                state.status = status
            })
            .addCase(updateById.rejected, (state, action) => {
                const {status} = action.payload
                state.status = status
            })
    }
});

const {reducer: carReduser, actions: {deleteCar, setCarForUpdate, updateCar}} = carSlice;

export const carActions = {deleteById, setCarForUpdate, updateById, getAll, create}
export default carReduser
