// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.render(
//     <App/>,
//     document.querySelector('#root')
// )


import React from 'react';
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";


import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
;