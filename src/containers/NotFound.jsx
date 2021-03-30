import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/index';

const NotFound = () => {
  return (
    <Layout title={'Pagina no encontrada'}>
      <h1>NotFound</h1>
    </Layout>
  );
};

export default NotFound;
