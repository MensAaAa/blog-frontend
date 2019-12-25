import React from 'react';
import { connect } from 'react-redux';
import { OnGetPostStartAction } from '../../src/core/redux/posts/posts.actions';
import PostContainer from '../../src/app/posts/components/post.container';

class Post extends React.Component<any> {
  static async getInitialProps({ store, query }) {
    store.dispatch(OnGetPostStartAction(query.id))
    return;
  }

  render() {
    return (
      <PostContainer />
    )
  }
}

export default connect()(Post);