import React from 'react';
import {Main} from "./layout/pages/main/main";
import {Header} from "./layout/header/header";

function App() {
    return (
        <>
            <Header/>
            <div className={'container'}>
                <Main/>
            </div>
        </>
    );
}

export default App;
