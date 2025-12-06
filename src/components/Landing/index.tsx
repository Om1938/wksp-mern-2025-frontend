import { useState } from "react";
import CreatePost from "../CreatePost";
import Feed from "../Feed/Index";
import type { TPost } from "../post";

const Landing = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  return (
    <div className="p-6 flex flex-col gap-3 m-auto max-w-xl">
      <CreatePost
        onCreatePost={(postParam) => {
          const post: TPost = { ...postParam, id: crypto.randomUUID() };
          setPosts([...posts, post]);
        }}
      />
      <Feed posts={posts} />
    </div>
  );
};

export default Landing;
