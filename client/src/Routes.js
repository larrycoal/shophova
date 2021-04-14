import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./HOC/layout";
import Home from  './Components/Home'
import RegisterLogin from './Components/RegisterLogin'
import Register from './Components/RegisterLogin/Register'
import UserDashboard from './Components/User'
import {auth} from './HOC/auth'
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={auth(Home,null)}/>
        <Route exact path="/userdashboard" component={auth(UserDashboard,true)}/>
        <Route exact path="/registerLogin" component={auth(RegisterLogin,false)}/>
        <Route exact path="/register" component={auth(Register,false)}/>
      </Switch>
    </Layout>
  );
};

export default Routes;
