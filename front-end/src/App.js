import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './views/login/login';
import Home from './views/home/home';
import Teste from './views/home/teste';
import CadastroItem from './views/cadastro/cadastro-item';
import EditarItem from './views/cadastro/editar-item';
import CadastrarFuncionario from './views/cadastro/cadastro-funcionario';
import {Provider, useDispatch} from 'react-redux';

import createStore from './store';

const store = createStore;

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/teste" component={Teste} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cadastrar_item" component={CadastroItem} />
          <Route path="/editMaterial/:id" component={EditarItem} />
          <Route exact path="/cadastrar_funcionario" component={CadastrarFuncionario} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
