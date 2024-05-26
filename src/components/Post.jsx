function Post({ posts, currentTime }) {
  function timeSince(time) {
    const seconds = Math.floor((currentTime - time) / 1000);

    let interval = Math.floor(seconds / 3600);

    if (interval >= 1) {
      return `${interval} hours ago`;
    }

    interval = Math.floor(seconds / 60);

    if (interval >= 1) {
      return `${interval} minutes ago`;
    }

    return `${seconds} seconds ago`;
  }

  return (
    <>
      {posts.map(({ name, photo, time, content }, i) => (
        <div key={i} className="bg-white p-2 rounded-lg">
          <div className="flex gap-2 items-center">
            <img src={photo} className="w-12 h-12 rounded-full object-cover" />

            <div className="leading-tight	">
              <p className="font-semibold">{name}</p>
              <p className="text-gray-400">{timeSince(time)}</p>
            </div>
          </div>

          <div className="p-2 ">
            {content.text.split("\n").map((text, i) => (
              <p key={i} className="text-lg mb-2">
                {text}
              </p>
            ))}
            <img src={content.img} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
