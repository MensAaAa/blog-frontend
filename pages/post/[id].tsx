import React from 'react';
import { connect } from 'react-redux';
import { OnGetPostStartAction } from '../../src/core/redux/posts/posts.actions';

class Post extends React.Component<any> {
  constructor(props) {
    super(props)
  }

  static async getInitialProps({ store, query }) {
    store.dispatch(OnGetPostStartAction(query.id))
    return;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>123</p>
      </div>
    )
  }
}

export default connect(state => state)(Post);