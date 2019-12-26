import React from 'react';
import { withRouter } from 'next/router'

import { LocalStorage } from '../../../../shared/storage';
import CustomLoader from '../../loader/components/custom-loader.component';
import { Container } from 'reactstrap';

interface StateType {
  isLoading: boolean;
}

const withAuth = (Component) => {
  class WrappedComponent extends React.PureComponent<{}, StateType> {
    state = {
      isLoading: true,
    }

    async componentDidMount() {
      const token = await new LocalStorage().getItem();
      const { router } = this.props as any;

      if (token) {
        router.push('/dashboard');
      }

      if (!token && router.pathname === '/dashboard') {
        router.push('/')
      }

      this.setState((prevState) => ({
        isLoading: !prevState.isLoading,
      }))
    }

    render() {
      const { isLoading } = this.state;
      if (isLoading) return (
        <Container>
          <div className="d-flex flex-row flex-wrap justify-content-center" style={{ paddingTop: 200, paddingBottom: '100vh' }}>
            <CustomLoader />
          </div>
        </Container>
      )
      return (
        <Component />
      )
    }
  }

  return withRouter(WrappedComponent as any);
}

export default withAuth;