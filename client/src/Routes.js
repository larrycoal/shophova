import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./HOC/layout";
import Home from  './Components/Home'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Layout>
  );
};

export default Routes;
