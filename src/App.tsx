import React, {FC} from 'react';
import {World} from './components/World/World';
import {Country} from "./components/Country/Country";


const App : FC = () => {
    return <div>
        <World/>
        <Country/>
    </div>
}

export default App;
