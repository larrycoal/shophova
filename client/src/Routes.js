import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./HOC/layout";
import Home from  './Components/Home'
import RegisterLogin from './Components/RegisterLogin'
import Register from './Components/RegisterLogin/Register'
import UserDashboard from './Components/User'
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/userdashboard" component={UserDashboard}/>
        <Route exact path="/registerLogin" component={RegisterLogin}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </Layout>
  );
};

export default Routes;
