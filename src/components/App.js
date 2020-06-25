import React from 'react';
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main";
import ErrorBoundary from "./ErrorBoundary";

function App() {
        return (
            <ErrorBoundary>
                <Main/>
            </ErrorBoundary>
        );
}

export default App;