function Sidebar() {
  return (
    <div className="space-y-4 col-start-3 col-span-2">
      <div className="bg-white  rounded-lg p-4">Profile</div>

      <div className="bg-white rounded-lg text-xl">
        <ul className="list-none">
          <li className="py-6 px-8 font-bold ">
            <a href="#">Home </a>
          </li>
          <li className="py-6 px-8 font-bold">Explore</li>
          <li className="py-6 px-8 font-bold">Notificações</li>
          <li className="py-6 px-8 font-bold">Message</li>
          <li className="py-6 px-8 font-bold">Bookmarks</li>
          <li className="py-6 px-8 font-bold">Setings</li>
        </ul>
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
