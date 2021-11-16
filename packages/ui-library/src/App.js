import React, { useState } from "react";
import Button from './Button';
import {
    BrowserRouter as Router,

} from "react-router-dom";

const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <main>
            <Router>
                <h1>Remote 1's cousdnter: {counter}</h1>
                <button onClick={() => setCounter((counter) => counter + 1)}>
                    increment
                </button>

                <Button />
            </Router>
        </main>
    );
};

export default App;
