import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Home from './routes/Home';
import Login from './routes/Login';
import SetProfile from './routes/SetProfile';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function AppRouter({ isLoggedIn }) {
    return (
        <>
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route path="/" exact component={Login}></Route>
                        <Route path="/main" exact component={Home}></Route>
                        <Route path="/profile" exact component={SetProfile}></Route>
                        <Route path="/signup" exact component={SignUp}></Route>
                    </>
                ) : (
                    <>
                    </>
                )}
            </Switch>
        </>
    );
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <AppRouter isLoggedIn={isLoggedIn} />
            </div>
        </BrowserRouter>
    );
}

export default App;