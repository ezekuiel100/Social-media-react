const menu = [
  { text: "Home", href: "/" },
  { text: "Explore", href: "/explore" },
  { text: "Notificações", href: "/notificações" },
  { text: "Message", href: "/message" },
  { text: "Setings", href: "/setings" },
  { text: "Logout", href: "/logout" },
];

function Sidebar() {
  return (
    <div className="w-1/4 space-y-4 ">
      <div className="bg-white  rounded-lg p-4 flex gap-4">
        <img src="/profile.webp" className="w-12 rounded-full" />
        <div>
          <p className="font-semibold">Ezequiel Silva</p>
          <p className="text-gray-400">@ezequiel</p>
        </div>
      </div>

      <div className="bg-white rounded-lg text-xl flex flex-col">
        {menu.map(({ text, href }, i) => (
          <a
            href={href}
            key={i}
            className="py-6 px-8 font-bold hover:bg-blue-200"
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
