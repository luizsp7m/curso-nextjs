import { useState } from 'react';

import { Container, Image, Form, Input, Error } from '../styles/Login';

import useAuth from '../hooks/useAuth';

import Head from 'next/head'

export default function Login() {

  const [mode, setMode] = useState('signIn');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState(null);

  const {
    signInWithGoogle,
    createUserWithEmail,
    signInWithEmail
  } = useAuth();

  function createNewUser() {
    createUserWithEmail(email, password, showError);
  }

  function signInEmail() {
    signInWithEmail(email, password, showError);
  }

  function showError(message) {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 4000);
  }

  return (
    <Container>
      <Head>
        <title>Log In</title>
      </Head>
      <Image src={`https://source.unsplash.com/random`} />

      <Form>
        <button className={`signInWithGoogle`} onClick={signInWithGoogle}>
          <img src={`/assets/google.png`} />
          <span>Continuar com Google</span>
        </button>

        <h5>Ou</h5>

        <Input>
          <span>E-mail</span>
          <input
            type={`email`}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </Input>

        <Input>
          <span>Senha</span>
          <input
            type={`password`}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Input>

        {error && (
          <Error>
            {error}
          </Error>
        )}

        {/* {mode === 'signUp' && (
          <Input>
            <span>Confirme sua senha</span>
            <input
              type={`password`}
              value={confirmPassword}
              onChange={({ target }) => setConfirmPassword(target.value)}
            />
          </Input>
        )} */}

        {mode === 'signIn' && <button onClick={signInEmail}>Entrar</button>}

        {mode === 'signUp' && <button onClick={createNewUser}>Cadastrar</button>}

        <hr />

        <span onClick={() => mode === 'signIn' ? setMode('signUp') : setMode('signIn')}>
          {mode === 'signIn' ? 'Crie uma conta' : 'Já possui uma conta?'}
        </span>
      </Form>
    </Container>
  );
}