export function createPost(
  textareaRef,
  image,
  postText,
  currentUser,
  setPostText,
  setImage,
  setcurrentTime,
  setPosts
) {
  textareaRef.current.style.height = "auto";

  if (postText.trim() != "" || image) {
    const newPost = {
      name: currentUser.name,
      photo: currentUser.photo,
      time: Date.now(),
      content: { img: image, text: `${postText}` },
    };

    setPostText("");
    setImage(null);
    setcurrentTime(Date.now());
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  }
}
