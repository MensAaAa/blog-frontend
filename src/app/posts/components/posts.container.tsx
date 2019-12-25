import React from 'react';
import { connect } from 'react-redux';
import { GlobalStateAppType } from 'src/core/redux/defaultState';

import { PostsInterface } from '../interfaces/posts.interface';

import PostsComponent from './posts.component';
interface PropsType extends PostsInterface { }

const PostsContainer = (props: PropsType) => {
  return (
    <>
      <PostsComponent posts={props.posts} />
    </>
  )
}

const mapStateToProps = (state: GlobalStateAppType) => ({
  posts: state.posts.posts,
})

export default connect(mapStateToProps )(PostsContainer);