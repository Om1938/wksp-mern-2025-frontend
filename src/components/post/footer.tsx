import { HeartIcon, MessageCircleIcon, ShareIcon } from "lucide-react";

const Footer = ({
  likeCount,
  shareLink,
}: {
  likeCount?: number;
  shareLink?: string;
}) => {
  return (
    <footer className="mt-4 p-4 border border-t border-slate-100">
      <div className="flex item-center justify-between text-slate-500">
        <button type="button" className="flex items-center gap-2 text-sm  ">
          <HeartIcon />
          Like {likeCount}
        </button>
        <button className="flex items-center gap-2 text-sm ">
          <MessageCircleIcon />
          Comment
        </button>
        <button className="flex items-center gap-2 text-sm">
          <ShareIcon />
          Share
        </button>
      </div>
    </footer>
  );
};

export default Footer;
