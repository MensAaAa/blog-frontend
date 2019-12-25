import { Container } from 'reactstrap';

import { Post } from "../../../core/redux/posts/posts.interface";

import '../styles/post.styles.scss';

interface PropsType {
  post: Post
}

const PostComponent = ({ post }: PropsType) => (
  <>
    {post &&
      <div className="d-flex flex-column flex-wrap single-post">
        <img src="https://d3sgyrafn929g0.cloudfront.net/wp-content/uploads/sites/18/2016/05/27100558/cover-5-600x700.jpg" className="img-fluid" />
        <Container>
          <div className="d-flex flex-row justify-content-end views mt-5">
            <span>Pregleda: {post.views}</span>
          </div>
          <h1 className="mt-2">{post.title}</h1>
          <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </div>
    }
  </>
)

export default PostComponent;