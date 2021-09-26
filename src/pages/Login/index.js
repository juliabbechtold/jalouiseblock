import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { useAuth } from '../../store/AuthProvider';

import { Acesso } from './styles';
import history from '../../services/history';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn({ email, password });
      history.push('/');
    } catch (err) {
      setLoading(false);
      setError('Login e/ou senha inválidos. Tente novamente');
    }

    setLoading(false);
    return true;
  }

  return (
    <>
      <Helmet>
        <title>Login | Jalouise Block</title>
      </Helmet>
      <Acesso>
        <div className="img">
          <img src={require('../../assets/img/persiana.jpg')} alt="Login" />
          {/* <h2>Bem vindo à TicketLive</h2> */}
        </div>
        <div className="formulario">
          <img
            className="logo"
            src={require('../../assets/logo.png')}
            alt="Logo"
          />
          <h2>Iniciar Sessão</h2>
          <form
            // onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
            className={loading ? 'newopacity' : ''}
          >
            <div className={loading ? 'disabled' : ''} />
            <label>E-MAIL</label>
            <input
              type="email"
              placeholder="exemplo@ticketlive.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>SENHA</label>
            <input
              type="password"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">ENTRAR</button>
          </form>
          {error && <p className="error">Erro: {error}</p>}
        </div>
      </Acesso>
    </>
  );
}
