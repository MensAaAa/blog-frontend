import React from 'react';
import Head from 'next/head';

import HeaderComponent from './header.component';
import FooterComponent from './footer.component';

interface PropsType {
  children: React.ReactChild | React.ReactChildren
}

const LayoutComponent = ({ children }: PropsType) => (
  <React.Fragment>
    <Head>
      <title>Moja prica</title>
    </Head>
    <HeaderComponent />
    {children}
    <FooterComponent />
  </React.Fragment>
)

export default LayoutComponent;