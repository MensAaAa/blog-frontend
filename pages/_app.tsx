import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/shared/styles/index.styles.scss';

import { makeStore } from '../src/core/redux/store';

import LayoutComponent from '../src/app/layout/component/layout.component';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props as any;

    return (
      <Provider store={store}>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </Provider>
    )
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp))