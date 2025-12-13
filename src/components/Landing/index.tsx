import { useContext, useEffect, useState } from "react";
import CreatePost from "../CreatePost";
import Feed from "../Feed/Index";
import type { TPost } from "../post";
import { AuthContext } from "../../providers/authProvider";
import { api } from "../../helper/api";
import type { CreatePost as TCreatePost } from "../post";

const Landing = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  const ctx = useContext(AuthContext);

  useEffect(() => {
    api.get("/posts").then((res) => {
      const postsData = res.data.data as TPost[];
      setPosts(postsData);
    });
  }, []);

  const handleCreatePost = (post: TCreatePost) => {
    api.post("/posts", post).then((res) => {
      const newPost = res.data.data as TPost;
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    });
  };

  if (!ctx) {
    throw new Error("I am out of Auth Contenxt. . . w..w.w w.w");
  }

  if (!ctx.isAuthenticated) {
    return (
      <div className="p-6 flex flex-col gap-3 m-auto max-w-xl">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-gray-400">
          You must be logged in to view this page.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-3 m-auto max-w-xl">
      <nav className="py-4 border-b border-slate-300/10 mb-4 flex justify-between items-center">
        {/* Heading */}
        <h1 className="text-2xl font-bold">Landing Page</h1>

        {/* user Details */}
        <div className="mt-2 text-gray-400">
          Welcome, {ctx.user?.userName} {ctx.user?.userHandle}
        </div>
      </nav>

      <CreatePost onCreatePost={handleCreatePost} />
      <Feed posts={posts} />
    </div>
  );
};

export default Landing;
