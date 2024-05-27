import {
  ChatBubbleOvalLeftIcon,
  ShareIcon,
  TrashIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { currentUser } from "../data/currentUser";
import { timeSince } from "../utils/timesince";
import { deletePost } from "../utils/deletePost";

function PostCard({ posts, currentTime, setPosts }) {
  return (
    <>
      {posts.map(({ id, name, photo, time, content }, i) => (
        <div key={i} className="bg-white p-2 rounded-lg">
          <header className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <img
                src={photo}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="leading-tight	">
                <p className="font-semibold">{name}</p>
                <p className="text-gray-400">{timeSince(currentTime, time)}</p>
              </div>
            </div>

            {name === currentUser.name && (
              <TrashIcon
                className="size-5 cursor-pointer text-gray-500 hover:text-gray-600"
                onClick={() => deletePost(id, setPosts)}
              />
            )}
          </header>

          <div className="p-2 ">
            {content.text.split("\n").map((text, i) => (
              <p key={i} className="text-lg mb-2">
                {text}
              </p>
            ))}
            <img src={content.img} />
          </div>

          <footer className="flex justify-between p-2">
            <div
              className="flex
             gap-6  "
            >
              <HeartIcon className="size-5 cursor-pointer hover:text-gray-500 transition-all" />
              <ChatBubbleOvalLeftIcon className="size-5 cursor-pointer hover:text-gray-500 transition-all" />
            </div>
            <ShareIcon className="size-5 cursor-pointer hover:text-gray-500 transition-all" />
          </footer>
        </div>
      ))}
    </>
  );
}

export default PostCard;
