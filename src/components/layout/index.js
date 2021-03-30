import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import { Div, Title, Subtitle } from './styles';
import '../../styles/components/Layout.css';
const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title> Platzi Conf | {title} </title>}
        {subtitle && <meta name="description" content={subtitle} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TU_USER" />
        <meta name="twitter:creator" content="@TU_USER" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Div>
        <Header />
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
        <Footer />
      </Div>
    </>
  );
};
export default Layout;
