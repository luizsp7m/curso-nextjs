import { Container, Content } from "./styles";

import Head from 'next/head';

import Sidebar from '../Sidebar';
import Header from '../Header';

import useAuth from '../../hooks/useAuth';

import { useEffect, Fragment } from "react";

import router from "next/router";

export default function Layout({ title, children }) {
  const { user, loadingUser } = useAuth();

  useEffect(() => {
    if (!loadingUser && !user) {
      router.push('/login');
    }
  }, [loadingUser]);

  return (
    <Container>
      {loadingUser && <h1>Loading</h1>}
      {!loadingUser && user && (
        <Fragment>
          <Head>
            <title>{title ? title : 'Página sem título'}</title>
          </Head>

          <Sidebar />

          <Header title={title} />

          <Content>
            {children}
          </Content>
        </Fragment>
      )}
    </Container>
  )
}