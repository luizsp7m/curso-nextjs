import { Fragment } from 'react';
import style from '../../styles/Home.module.css';

import Header from "../components/Header";

export default function Home() {
  const array = [];

  for(let i = 0; i < 64; i++) {
    array.push(i);
  }

  return (
    <Fragment>
      <Header />

      <div className={style.container}>
        <div className={style.content}>
          { array.map(item => (
            <div className={ `` } key={item}>{item}</div>
          )) }
        </div>
      </div>
    </Fragment>
  );
}