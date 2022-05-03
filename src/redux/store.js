import {configureStore} from "@reduxjs/toolkit";
import carReduser from "./slices/car.slice";

const store = configureStore({
    reducer:{
        cars:carReduser
    }
});

export default store