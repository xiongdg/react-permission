import React from 'react';
import Comp from './Comp';
import Comp1 from './Comp1';
import './App.css';

function App() {
    return (
        <div>
            <header></header>
            <Comp a={'a'} b={'b'} />
            <Comp1 a={'a'} b={'b'} />
        </div>
    );
}

export default App;
