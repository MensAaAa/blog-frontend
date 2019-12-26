import React from 'react';
import { connect } from 'react-redux';
import DashboardComponent from './dashboard.component';
import withAuth from '../../shared/HOC/components/withAuth';
import { Dispatch, AnyAction } from 'redux';
import { OnFetchPostsStartAction, OnDeletePostStartAction } from '../../../core/redux/posts/posts.actions';
import { GlobalStateAppType } from 'src/core/redux/defaultState';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  fetchPosts: () => dispatch(OnFetchPostsStartAction()),
  deletePost: (id: number) => dispatch(OnDeletePostStartAction(id))
})

const mapStateToProps = (state: GlobalStateAppType) => ({
  posts: state.posts.posts,
})

const DashboardContainer = (props) => (<DashboardComponent {...props}/>)

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(DashboardContainer));