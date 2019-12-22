import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

interface PropsType {
  token: string;
}

const withAuth = (Component) => {
  class WrappedComponent extends React.PureComponent<PropsType> {
    componentDidMount() {
      const { token } = this.props;
      console.log(token)
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

  const mapStateToProps = (state) => ({
    token: state.user.currentUser.token,
  })
  return connect(mapStateToProps)(WrappedComponent);
}

export default withAuth;