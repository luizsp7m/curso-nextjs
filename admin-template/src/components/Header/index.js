import { Container, Right } from "./styles";

import Switch from 'react-switch';

import { ThemeContext } from '../../pages/_app'; // ThemeContext

import { useContext } from "react";

export default function Header({ title }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h4>{title ? title : 'Página sem título'}</h4>

      <Right>
        <button onClick={toggleTheme}>Swith</button>

        <img src={`https://i.pinimg.com/originals/97/8c/3b/978c3bd56b4b109a881da2db5bc9c215.gif`} />
      </Right>
    </Container>
  );
}