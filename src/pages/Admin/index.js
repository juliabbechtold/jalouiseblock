import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
// import api from '../../services/api';
import { Container } from './style';

export default function AdminHome() {
  return (
    <>
      <Helmet>
        <title>Jalouise Bloquer</title>
      </Helmet>
      <Header />
      <Container>
        <AdminMenu />
      </Container>
      <Footer />
    </>
  );
}
