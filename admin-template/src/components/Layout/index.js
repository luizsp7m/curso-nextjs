import { Container, Content } from "./styles";

import Head from 'next/head';

import Sidebar from '../Sidebar';
import Header from '../Header';

export default function Layout({ title, children }) {
  return (
    <Container>
      <Head>
        <title>{title ? title : 'Página sem título'}</title>
      </Head>

      <Sidebar />

      <Header title={title} />

      <Content>
        {children}
      </Content>

    </Container>
  )
}