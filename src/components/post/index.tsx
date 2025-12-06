import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export type TPost = {
  id: number;
  avatarUrl?: string;
  userName?: string;
  userHandle?: string;
  timestamp: string;
  textContent?: string;
  imageSrc?: string;
  likeCount: number;
  shareLink: string;
};

export type PostProps = {
  post: TPost;
};

const Post = ({ post }: PostProps) => {
  const {
    likeCount,
    shareLink,
    timestamp,
    avatarUrl,
    imageSrc,
    textContent,
    userName,
    userHandle,
  } = post;
  return (
    <div className="border border-slate-100 p-6 bg-white rounded-2xl shadow-sm w-96 m-auto">
      <Header
        userName={userName}
        userHandle={userHandle}
        timestamp={timestamp}
        avatarUrl={avatarUrl}
      />

      <Content textContent={textContent} imageSrc={imageSrc} />

      <Footer likeCount={likeCount} shareLink={shareLink} />
    </div>
  );
};

export default Post;
