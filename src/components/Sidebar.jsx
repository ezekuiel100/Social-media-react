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
    text: "Notifications",
    href: "/notifications",
    icon: <BellIcon className="size-5" />,
  },
  {
    text: "Message",
    href: "/message",
    icon: <ChatBubbleOvalLeftIcon className="size-5" />,
  },
  {
    text: "Settings",
    href: "/settings",
    icon: <Cog8ToothIcon className="size-5" />,
  },
  {
    text: "Logout",
    href: "/logout",
    icon: <ArrowLeftEndOnRectangleIcon className="size-5" />,
  },
];

function Sidebar() {
  const path = window.location.pathname;

  return (
    <div className="w-full fixed bottom-0 left-0 sm:w-auto lg:w-1/4 space-y-4 sm:static">
      <div className="bg-white  rounded-lg p-4 hidden sm:flex gap-4">
        <img src={currentUser.photo} className="w-12 rounded-full" />
        <div className="leading-snug">
          <p className="font-semibold">{currentUser.name}</p>
          <p className="text-gray-400">{currentUser.username}</p>
        </div>
      </div>

      <div className="bg-white shadow shadow-black sm:shadow-none  sm:rounded-lg text-xl flex sm:flex-col justify-between overflow-hidden">
        {menu.map(({ text, href, icon }, i) => (
          <a
            href={href}
            key={i}
            className={` ${
              href === path ? "bg-blue-600 text-white" : " hover:bg-blue-300"
            } py-6 px-5 sm:px-8 font-bold  flex gap-1 items-center transition-all`}
          >
            <span>{icon}</span> <span className="hidden sm:inline">{text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
