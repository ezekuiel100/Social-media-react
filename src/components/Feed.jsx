import Post from "./Post";

function Feed() {
  return (
    <div className="w-full col-start-4 col-span-6 rounded-lg  space-y-4">
      <Post />
      <div className="bg-white rounded-lg h-full p-4">feed</div>
    </div>
  );
}

export default Feed;
