import React from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Clinics from "../components/Clinics";
import NewClinic from "../components/NewClinic";

export default (
  <Routes>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/clinics" exact component={Clinics} />
      <Route path="/clinic" exact component={NewClinic} />
    </Switch>
  </Routes>
);


