import { useState } from "react";
import Feed from "./components/Feed/Index";
import createPosts from "./helper/createPosts";

function App() {
  const [posts, setPosts] = useState(createPosts(10));

  return (
    <div className="p-6 flex flex-col gap-3">
      <Feed posts={posts} />
    </div>
  );
}

export default App;
