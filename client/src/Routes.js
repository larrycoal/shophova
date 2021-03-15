import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./HOC/layout";
import Home from  './Components/Home'
import RegisterLogin from './Components/RegisterLogin'
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/registerLogin" component={RegisterLogin}/>

      </Switch>
    </Layout>
  );
};

export default Routes;
