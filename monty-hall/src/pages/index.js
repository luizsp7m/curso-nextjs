import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

import { useContext, useEffect } from 'react'

import { FormContext } from '../contexts/FormContext';

export default function Home() {
  const { numDoors, setDoorSelected, setNumDoors, doorSelected } = useContext(FormContext);

  useEffect(() => {
    if (numDoors < doorSelected) {
      setDoorSelected(numDoors);
    }
  }, [numDoors]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.title}>Monty Hall</div>

        <div className={styles.door}>
          <h5>Quantidade de portas?</h5>
          <h1>{numDoors}</h1>
          <div>
            <button onClick={() => numDoors > 2 && setNumDoors(numDoors - 1)}>-</button>
            <button onClick={() => setNumDoors(numDoors + 1)}>+</button>
          </div>
        </div>

        <div className={styles.door}>
          <h5>Porta selecionada?</h5>
          <h1>{doorSelected}</h1>
          <div>
            <button onClick={() => doorSelected > 1 && setDoorSelected(doorSelected - 1)}>-</button>
            <button onClick={() => doorSelected < numDoors && setDoorSelected(doorSelected + 1)}>+</button>
          </div>
        </div>

        <Link href={`/game`} passHref>
          <div className={styles.start}>
            <span>Iniciar jogo</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
