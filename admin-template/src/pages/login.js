import { useState } from 'react';

import { Container, Image, Form, Input } from '../styles/Login';

import useAuth from '../hooks/useAuth';

export default function Login() {

  const [mode, setMode] = useState('signIn');

  const { signInWithGoogle } = useAuth();

  return (
    <Container>
      <Image src={`https://source.unsplash.com/random`} />

      <Form>
        <button className={`signInWithGoogle`} onClick={signInWithGoogle}>
          <img src={`/assets/google.png`} />
          <span>Continuar com Google</span>
        </button>

        <h5>Ou</h5>

        <Input>
          <span>E-mail</span>
          <input type={`email`} />
        </Input>

        <Input>
          <span>Senha</span>
          <input type={`password`} />
        </Input>

        {mode === 'signUp' && (
          <Input>
            <span>Confirme sua senha</span>
            <input type={`password`} />
          </Input>
        )}

        <button>{mode === 'signIn' ? 'Entrar' : 'Cadastrar'}</button>

        <hr />

        <span onClick={() => mode === 'signIn' ? setMode('signUp') : setMode('signIn')}>
          {mode === 'signIn' ? 'Crie uma conta' : 'Já possui uma conta?'}
        </span>
      </Form>
    </Container>
  );
}