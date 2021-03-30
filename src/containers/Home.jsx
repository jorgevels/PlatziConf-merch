import React from 'react';
/* import { Helmet } from 'react-helmet'; */
import Products from '../components/Products';
import initialState from '../initialState';
import Layout from '../components/layout/index';

const Home = () => {
  return (
    <>
      <Layout title={'Productos'}>
        <Products products={initialState.products} />
      </Layout>
    </>
  );
};

export default Home;
