import style from '../../styles/Home.module.css';

import { Fragment, useState } from 'react';

import Head from 'next/head';

import Header from "../components/Header";

export default function Home() {
  const [count, setCount] = useState(0);

  const [max, setMax] = useState(6);
  const [numbers, setNumbers] = useState([]);

  function generateNumbers() {
    if(max === '') {
      return alert("Digite um número");
    }

    if(max < 1 || max > 16) {
      return alert("Digite um número entre 1 e 16");
    }

    let numbers = [];

    for (let i = 0; i < max; i++) {
      let randomNumber = Math.round(Math.random() * 60);

      if (numbers.indexOf(randomNumber) === -1) {
        numbers.push(randomNumber);
      } else {
        i--;
      }
    }

    setNumbers(numbers);
  }

  return (
    <Fragment>
      <Head>
        <title>Homepage</title>
      </Head>

      <Header />

      <div className={style.container}>
        <div className={style.content}>
          <div className={style.count}>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
            <button onClick={() => setCount(count - 1)}>Diminuir</button>
            <h3>{count}</h3>
          </div>

          <div className={style.random}>
            <div className={style.form}>
              <label>Número de números:</label>
              <input type={`number`} value={max} onChange={({ target }) => setMax(target.value)} />
              <button onClick={generateNumbers}>Sortear</button>
            </div>

            <div className={style.numbers}>
              {numbers.map((number, index) => <h3 key={index}>{number}</h3>)}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}