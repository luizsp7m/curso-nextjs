import { Container, Right } from "./styles";

import { ThemeContext } from '../../pages/_app'; // ThemeContext

import { useContext } from "react";

import useAuth from '../../hooks/useAuth';

export default function Header({ title }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { user, loadingUser } = useAuth();

  return (
    <Container>
      <h4>{title ? title : 'Página sem título'}</h4>

      <Right>
        <button onClick={toggleTheme}>Swith</button>

        { !loadingUser && <img src={user.avatar} /> }
      </Right>
    </Container>
  );
}