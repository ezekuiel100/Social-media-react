import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";

const post = [
  {
    name: "Bruno silva",
    photo: "/profile.webp",
    time: Date.now(),
    content: { img: "./praia.jpg", text: `Ola mundo` },
  },
];

function Feed() {
  const [posts, setPosts] = useState(post);
  const [currentTime, setcurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-3/4 rounded-lg space-y-4">
      <NewPost setPosts={setPosts} setcurrentTime={setcurrentTime} />
      <Post posts={posts} currentTime={currentTime} />
    </div>
  );
}

export default Feed;
