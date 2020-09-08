import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './views/login/login';
import Home from './views/home/home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
