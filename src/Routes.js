import React from "react";
import { Switch, Route } from "react-router-dom";
import Categorias from "./Components/Categorias/Categorias";
import Home from "./Components/Home/Home";
import Planos from "./Components/Planos/Planos";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/planos">
                <Planos></Planos>
            </Route>
            <Route exact path="/categorias">
                <Categorias></Categorias>
            </Route>
        </Switch>
    );
}
export default Routes