import { PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { currentUser } from "../data/currentUser";
import { createPost, handleText, handleImage } from "../utils/NewPostUtils";

function NewPost({ setPosts, setcurrentTime }) {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);
  const textareaRef = useRef(null);

  return (
    <div className="bg-white rounded-lg p-2">
      <div className="bg-white p-2 flex justify-between gap-2 items-start">
        <textarea
          ref={textareaRef}
          type="text"
          rows={1}
          placeholder="What's in your mind?"
          className="w-full outline-none px-2 resize-none py-2 overflow-hidden"
          value={postText}
          onChange={(e) => handleText(e, setPostText, textareaRef)}
        />
        <button
          className="text-white text-sm font-bold h-auto bg-blue-600 rounded-lg px-7 py-2 hover:bg-blue-500 transition-all"
          onClick={() =>
            createPost(
              textareaRef,
              image,
              postText,
              currentUser,
              setPostText,
              setImage,
              setcurrentTime,
              setPosts
            )
          }
        >
          Post
        </button>
      </div>

      <div className="ml-4 flex gap-2">
        <label
          htmlFor="image-upload"
          className="inline-flex gap-1 items-center cursor-pointer hover:text-blue-500 transition-all "
        >
          <PhotoIcon className="size-5" />
          <span className="font-semibold text-sm hidden sm:inline">Photo</span>
        </label>

        <input
          type="file"
          id="image-upload"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleImage(e, setImage)}
        />

        <div className="flex gap-1 cursor-pointer hover:text-blue-500 transition-all">
          <VideoCameraIcon className="size-5 " />
          <span className="font-semibold text-sm hidden sm:inline">Video</span>
        </div>
      </div>

      {image && <img src={image} className="h-36 p-2 " />}
    </div>
  );
}

export default NewPost;
