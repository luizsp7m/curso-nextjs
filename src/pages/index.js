import style from '../../styles/Home.module.css';

import { Fragment } from 'react';

import Head from 'next/head';

import Header from "../components/Header";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Homepage</title>
      </Head>

      <Header />

      <div className={style.container}>
        
      </div>
    </Fragment>
  );
}