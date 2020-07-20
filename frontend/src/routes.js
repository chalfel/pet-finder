import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon'
import Register from './pages/Register'
import Home from './pages/Home'
import NewPets from './pages/NewPets'
import User from './pages/User'
import PetsContext from './contexts/Pets'

export default function Routes(){
    const { signed } = useContext(PetsContext)
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Logon} />
            <Route path="/pets/new" component={NewPets} />
            { signed && <Route path="/user" component={User} /> }
        </Switch>
        </BrowserRouter>
    );
}