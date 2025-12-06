const Content = (props: { textContent?: string; imageSrc?: string }) => {
  const { textContent, imageSrc } = props;

  return (
    <main>
      <p>{textContent}</p>
      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 h-40 flex items-center justify-center text-sm overflow-hidden ">
        <img src={imageSrc} className="object-cover h-full" />
      </div>
    </main>
  );
};

export default Content;
