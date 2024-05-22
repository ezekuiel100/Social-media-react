function Post() {
  return (
    <div className="bg-white rounded-full p-2 flex justify-between gap-2">
      <input
        type="text"
        placeholder="What's in your mind?"
        className="w-full outline-none px-2"
      />
      <button className="text-white text-sm font-bold bg-blue-500 rounded-full px-7 py-2 ">
        Post
      </button>
    </div>
  );
}

export default Post;
