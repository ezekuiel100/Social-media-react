import { useState } from "react";

function NewPost({ setPosts, setcurrentTime }) {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        setImage(e.target.result);
      };
    }
  };

  function createPost() {
    if (postText.length > 0 || image) {
      const newPost = {
        name: "Ezequiel silva",
        photo: "/profile.webp",
        time: Date.now(),
        content: { img: image, text: `${postText}` },
      };

      setPostText("");
      setImage(null);
      setcurrentTime(Date.now());
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    }
  }

  return (
    <div className="bg-white rounded-lg p-2">
      <div className="bg-white p-2 flex justify-between gap-2">
        <input
          type="text"
          placeholder="What's in your mind?"
          className="w-full outline-none px-2"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button
          className="text-white text-sm font-bold bg-blue-500 rounded-lg px-7 py-2"
          onClick={createPost}
        >
          Post
        </button>
      </div>

      <div className="ml-4  font-semibold text-sm  ">
        <label
          htmlFor="image-upload"
          className="inline-flex gap-2 items-center cursor-pointer  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span>Photos</span>
        </label>

        <input
          type="file"
          id="image-upload"
          accept="image/*"
          className="hidden"
          onChange={handleImage}
        />
      </div>
    </div>
  );
}

export default NewPost;
