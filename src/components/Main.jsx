import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import PostCard from "./PostCard";
import { Posts } from "../data/posts";

function Main() {
  const [posts, setPosts] = useState(Posts);
  const [currentTime, setcurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="lg:w-3/4 rounded-lg space-y-4">
      <NewPost setPosts={setPosts} setcurrentTime={setcurrentTime} />
      <PostCard posts={posts} setPosts={setPosts} currentTime={currentTime} />
    </main>
  );
}

export default Main;
