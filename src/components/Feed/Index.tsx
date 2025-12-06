import type { TPost } from "../post";
import Post from "../post";

type Props = {
  posts: TPost[];
};

const Feed = (props: Props) => {
  const { posts } = props;

  return (
    <>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
};

export default Feed;
