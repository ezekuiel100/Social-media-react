import {
  ArrowLeftEndOnRectangleIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
  Cog8ToothIcon,
  GlobeAltIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

import { currentUser } from "../data/currentUser";

const menu = [
  {
    text: "Home",
    href: "/",
    icon: <HomeIcon className="size-5" />,
  },
  {
    text: "Explore",
    href: "/explore",
    icon: <GlobeAltIcon className="size-5" />,
  },
  {
    text: "Notificações",
    href: "/notificações",
    icon: <BellIcon className="size-5" />,
  },
  {
    text: "Message",
    href: "/message",
    icon: <ChatBubbleOvalLeftIcon className="size-5" />,
  },
  {
    text: "Setings",
    href: "/setings",
    icon: <Cog8ToothIcon className="size-5" />,
  },
  {
    text: "Logout",
    href: "/logout",
    icon: <ArrowLeftEndOnRectangleIcon className="size-5" />,
  },
];

function Sidebar() {
  return (
    <div className="w-1/4 space-y-4 ">
      <div className="bg-white  rounded-lg p-4 flex gap-4">
        <img src={currentUser.photo} className="w-12 rounded-full" />
        <div className="leading-snug">
          <p className="font-semibold">{currentUser.name}</p>
          <p className="text-gray-400">{currentUser.username}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg text-xl flex flex-col">
        {menu.map(({ text, href, icon }, i) => (
          <a
            href={href}
            key={i}
            className="py-6 px-8 font-bold hover:bg-blue-200 flex gap-1 items-center
            "
          >
            <span>{icon}</span> {text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
