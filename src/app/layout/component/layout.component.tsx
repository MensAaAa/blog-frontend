import React from 'react';

import HeaderComponent from './header.component';
import FooterComponent from './footer.component';

interface PropsType {
  children: React.ReactChild | React.ReactChildren
}

const LayoutComponent = ({ children }: PropsType) => (
  <div>
    <HeaderComponent />
    {children}
    <FooterComponent />
  </div>
)

export default LayoutComponent;