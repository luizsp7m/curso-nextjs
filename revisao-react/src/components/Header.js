import style from '../../styles/Header.module.css'

import { useState } from 'react';

export default function Header({ title = "Curso NextJS", }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h4 className={style.title}>{title}</h4>

        <div className={`${style.navbar} ${toggle && style.toggle}`}>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </div>

        <div className={style.burger} onClick={() => setToggle(!toggle)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}