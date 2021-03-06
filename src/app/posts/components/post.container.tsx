import { connect } from 'react-redux';

import PostComponent from './post.component';
import { GlobalStateAppType } from '../../../core/redux/defaultState';

const mapStateToProps = (state: GlobalStateAppType) => ({
  post: state.posts.selectedPost,
  isFetching: state.posts.isFetching,
})

export default connect(mapStateToProps)(PostComponent);