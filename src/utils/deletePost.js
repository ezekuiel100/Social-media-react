import { Posts } from "../data/posts";

export function deletePost(id, setPosts) {
  const newPosts = Posts.filter((post) => post.id != id);
  setPosts(newPosts);
}
