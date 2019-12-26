import Link from 'next/link';

interface PropsType {
  post: any
}

const PostItem = ({ post }: PropsType) => (
  <div className="d-flex flex-column flex-wrap">
    <div className="post-img">
      <img src="https://d3sgyrafn929g0.cloudfront.net/wp-content/uploads/sites/18/2016/05/27100558/cover-5-600x700.jpg" className="img-fluid" />
    </div>
    <div className="post-info">
      <div className="d-flex flex-row justify-content-end mt-2">
        <span>Pregleda: {post.views}</span>
      </div>
      <h1>{post.title}</h1>
      <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="post-cta d-flex flex-row justify-content-center mt-3">
        <Link href={`/post/[id]`} as={`/post/${post.path}`}>
          <a>Procitaj vise</a>
        </Link>
      </div>
    </div>
  </div>
)

export default PostItem;