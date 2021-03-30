import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import Layout from '../components/layout/index';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);

  return (
    <Layout title={'Mapa de tu pedido'}>
      <div className="Success">
        <div className="Success-content">
          <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en 3 dias a tu direccion:</span>
          <div className="Success-map">
            <Map data={location} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
