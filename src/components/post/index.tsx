import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export type TPost = {
  id: string;
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
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
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
