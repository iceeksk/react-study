import React from 'react';
import Article from "./Article";
import articles from "../fixtures";


function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article article={articles[0]} className={'be'} />
        </div>
    )
};

export default App;