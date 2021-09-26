import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Componente
import PrivateRoute from '../components/PrivateRoute';

import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import AdminHome from '../pages/Admin';
import CreateUser from '../pages/Admin/CreateUser';
import AllUsers from '../pages/Admin/AllUsers';
import UpdateUser from '../pages/Admin/UpdateUser';
import Home from '../pages/Home';
import Suporte from '../pages/Suporte';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/suporte" exact component={Suporte} />
      <Route path="/login" exact component={Login} />
      <Route path="/admin/dashboard" exact component={AllUsers} />
      <Route path="/admin/createuser" exact component={CreateUser} />
      <Route path="/admin/updateuser" exact component={UpdateUser} />
      {/* <Route path="/admin/users" exact component={AllUsers} /> */}
      <Route path="/minha-conta" exact component={Perfil} />
    </Switch>
  );
}
