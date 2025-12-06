const Header = (props: {
  avatarUrl?: string;
  userName?: string;
  userHandle?: string;
  timestamp?: string;
}) => {
  const firstCharaterOfName = props.userName ? props.userName[0] : "U";
  return (
    <header className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-amber-400 text-white text-lg">
        {firstCharaterOfName}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900">{props.userName}</span>
          <span className="text-sm text-slate-400">{props.userHandle}</span>
        </div>
        <span className="text-xs text-slate-400">{props.timestamp}</span>
      </div>
    </header>
  );
};

export default Header;
