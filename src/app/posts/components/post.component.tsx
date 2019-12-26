import { Container } from 'reactstrap';
import Head from 'next/head';

import CustomLoader from '../../shared/loader/components/custom-loader.component';
import { Post } from "../../../core/redux/posts/posts.interface";

import '../styles/post.styles.scss';

interface PropsType {
  post: Post;
  isFetching: boolean;
}

const PostComponent = ({ post, isFetching }: PropsType) => (
  <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.title} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="og:title" property="og:title" content="Graph title" />
      <meta name="robots" content="index, follow" />
    </Head>
    <div className="d-flex flex-column flex-wrap single-post">
      <img src="https://d3sgyrafn929g0.cloudfront.net/wp-content/uploads/sites/18/2016/05/27100558/cover-5-600x700.jpg" className="img-fluid" />
      <Container>
        {isFetching &&
          <div className="d-flex flex-row flex-wrap justify-content-center">
            <CustomLoader />
          </div>
        }
        {post && !isFetching &&
          <>
            <div className="d-flex flex-row justify-content-between views mt-5">
              <span>Dodano datuma: {new Date(post.createdAt).toLocaleDateString()}</span>
              <span>Pregleda: {post.views}</span>
            </div>
            <h1 className="mt-5">{post.title}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </>
        }
      </Container>
    </div>
  </>
)

export default PostComponent;