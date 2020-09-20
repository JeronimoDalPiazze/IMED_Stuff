import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './views/login/login';
import Home from './views/home/home';
import CadastroItem from './views/cadastro/cadastro-item';
import CadastrarFuncionario from './views/cadastro/cadastro-funcionario';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cadastrar_item" component={CadastroItem} />
        <Route exact path="/cadastrar_funcionario" component={CadastrarFuncionario} />
      </BrowserRouter>
    </div>
  );
}

export default App;
