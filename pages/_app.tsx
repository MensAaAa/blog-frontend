// import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/shared/styles/index.styles.scss';

import { configureStore } from '../src/core/redux/store';

import LayoutComponent from '../src/app/layout/component/layout.component';

const MyApp = ({ Component, pageProps, store }) => (
  <Provider store={store}>
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  </Provider>
)

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}

export default withRedux(configureStore)(withReduxSaga(MyApp))