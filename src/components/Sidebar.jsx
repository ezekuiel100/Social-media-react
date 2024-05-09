function Sidebar() {
  return (
    <div className="space-y-2 ">
      <div className="bg-white rounded-lg">Profile</div>

      <div className="bg-white rounded-lg">
        <ul className="list-none">
          <li>Home</li>
          <li>Explore</li>
          <li>Notificações</li>
          <li>Message</li>
          <li>Bookmarks</li>
          <li>Setings</li>
        </ul>
      </div>

      <div>
        <button className="text-white  text-sm font-bold bg-blue-500 rounded-full px-4 py-2">
          Create Post
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
