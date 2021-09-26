import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import history from '../../services/history';
import api from '../../services/api';

export default function PrivateRoute({ component: Component, ...rest }) {
  useEffect(() => {
    async function checkLogin() {
      try {
        await api.get('/users/me');
      } catch (err) {
        history.push('/login');
        return false;
      }
      return true;
    }
    checkLogin();
    // eslint-disable-next-line
  }, []);

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
