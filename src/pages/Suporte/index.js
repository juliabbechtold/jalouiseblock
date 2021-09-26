import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import { Container } from './style';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Suporte | Jalouise Block</title>
      </Helmet>
      <Header />
      <Container></Container>
      <Footer />
    </>
  );
}
