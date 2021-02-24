import React from 'react';
import { hot } from "react-hot-loader";

import './App.css';


const App = () => (
    <div className="App">
        <h1>Hello, World!!</h1>
        <p>A quick brown fox jumps over the lazy dog.</p>
    </div>
);

export default hot(module)(App);