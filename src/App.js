import React from 'react';
import {Cars, CarsForm} from "./components";

const App = () => {
    return (
        <div>
            <CarsForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default App;