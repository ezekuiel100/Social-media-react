const menu = [
  { text: "Home", href: "/" },
  { text: "Explore", href: "/explore" },
  { text: "Notificações", href: "/notificações" },
  { text: "Message", href: "/message" },
  { text: "Bookmarks", href: "/bookmarks" },
  { text: "Setings", href: "/setings" },
];

function Sidebar() {
  return (
    <div className="space-y-4 col-span-3">
      <div className="bg-white  rounded-lg p-4 flex gap-4">
        <img src="/profile.webp" className="w-12 rounded-full" />
        <div>
          <p className="font-semibold">Ezequiel Silva</p>
          <p className="text-gray-400">@ezequiel</p>
        </div>
      </div>

      <div className="bg-white rounded-lg text-xl flex flex-col">
        {menu.map(({ text, href }, i) => (
          <a href={href} key={i} className="py-6 px-8 font-bold ">
            {text}
          </a>
        ))}
      </div>

      <div className="">
        <button className="text-white  text-sm font-bold bg-blue-500 rounded-full px-4 py-3 w-full">
          Create Post
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
