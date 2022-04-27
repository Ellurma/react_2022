import React from 'react';
import {Cats, CatsForm, Dogs, DogsForm} from "./components";


const App = () => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <CatsForm/>
                <DogsForm/>
            </div>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Cats/>
                <Dogs/>
            </div>
        </div>
    );
};

export default App;