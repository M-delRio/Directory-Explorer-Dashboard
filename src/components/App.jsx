import React from 'react';
// import { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


