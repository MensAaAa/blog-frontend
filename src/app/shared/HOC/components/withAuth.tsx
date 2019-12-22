import React from 'react';
import Router from 'next/router';

import { LocalStorage } from '../../../../shared/storage';


const withAuth = (Component) => {
  class WrappedComponent extends React.PureComponent<{}> {
    async componentDidMount() {
      const token = new LocalStorage().getItem();

      if (token) {
        Router.push('/dashboard');
      }

      if (!token && Router.pathname === '/dashboard') {
        Router.push('/')
      }
    }

    render() {
      return (
        <Component />
      )
    }
  }

  return WrappedComponent;
}

export default withAuth;