import React from 'react';
import { connect } from 'react-redux';
import HomepageComponent from '../src/app/homepage/components/homepage.component';
import PostsContainer from '../src/app/posts/components/posts.container';
import { OnFetchPostsStartAction } from '../src/core/redux/posts/posts.actions';


class IndexPage extends React.Component<any> {
  static async getInitialProps({ store }) {
    store.dispatch(OnFetchPostsStartAction())
    return;
  }

  render() {
    return (
      <>
        <HomepageComponent />
        <PostsContainer />
      </>
    )
  }
}

export default connect()(IndexPage);
