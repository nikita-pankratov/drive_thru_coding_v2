import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import SignUp from './SignUpComponent';
import Login from './Login';


const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
        </div>
    </BrowserRouter>
);

export default App;