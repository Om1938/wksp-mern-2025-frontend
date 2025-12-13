import { faker } from "@faker-js/faker";
import { useContext, useState } from "react";
import type { CreatePost as TCreatePost } from "../post";
import { AuthContext } from "../../providers/authProvider";

faker.seed(909);

type Props = {
  onCreatePost: (post: TCreatePost) => void;
};

const CreatePost = ({ onCreatePost }: Props) => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("I am out of Auth Contenxt. . . w..w.w w.w");
  }

  const currentUser = ctx.user;

  const [textContent, setTextContent] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  return (
    <div className="border border-slate-300 p-4 rounded-xl">
      <textarea
        className="w-full p-2 border border-slate-200 rounded-xl text-sm"
        onChange={(event) => {
          setTextContent(event.target.value);
        }}
        placeholder="Post Content"
      ></textarea>

      <input
        type="text"
        placeholder="Post Image"
        className="w-full p-2 border border-slate-200 rounded-xl text-sm"
        onChange={(event) => {
          setImageSrc(event.target.value);
        }}
      />

      <button
        className="mt-4 px-4 py-2 rounded-lg bg-black text-white text-sm"
        onClick={() => {
          const post: TCreatePost = {
            likeCount: 0,
            textContent,
            imageSrc,
            shareLink: "",
          };

          onCreatePost(post);
        }}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
