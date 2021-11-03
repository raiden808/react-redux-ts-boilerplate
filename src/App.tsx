import React from 'react';
import { Counter } from './provider/counter';
import { Posts } from './provider/posts';

function App() {
    return (
        <>
            <Counter />
            <Posts />
        </>
    );
}
export default App;