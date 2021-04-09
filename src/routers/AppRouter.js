import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,

  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DashboardRoutes } from './DashboardRoutes';




export const AppRouter = () => {
    return (
        <Router>


            <Switch>
                <Route exact path="/login" component={LoginScreen}/>
                
                {/** no lleva exact porque tiene todas las demas rutas y no podra acceder a ellas */}
                <Route  path="/" component={DashboardRoutes}/>
            </Switch>
        </Router>
    )
}
