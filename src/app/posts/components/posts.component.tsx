import PostItem from './post-item.component';

import '../styles/posts.styles.scss';

interface PropsType {
  posts: any
}
const PostsComponent = ({ posts }: PropsType) => (
  <div className="d-flex flex-row flex-wrap posts">
    {posts && posts.map(post => 
        <div className="col-lg-3 pl-0 pr-0 post">
          <PostItem post={post} />
        </div>
      )}
  </div>
)

export default PostsComponent;