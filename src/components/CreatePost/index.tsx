import { faker } from "@faker-js/faker";
import { useState } from "react";
import type { TPost } from "../post";

faker.seed(909);

type Props = {
  onCreatePost: (post: Omit<TPost, "id">) => void;
};

const CreatePost = ({ onCreatePost }: Props) => {
  const [currentUser] = useState({
    avatarUrl: faker.image.avatar(),
    userName: faker.person.fullName(),
    userHandle: `@${faker.word.adjective()}${faker.word.noun()}`,
  });

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
          const post: Omit<TPost, "id"> = {
            likeCount: 0,
            textContent,
            imageSrc,
            timestamp: new Date().toISOString(),
            shareLink: "",
            avatarUrl: currentUser.avatarUrl,
            userHandle: currentUser.userHandle,
            userName: currentUser.userName,
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
