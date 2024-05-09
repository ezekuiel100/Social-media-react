function Nav() {
  return (
    <nav className="p-2 bg-white flex justify-around items-center">
      <h1 className="font-bold text-2xl">Logo</h1>
      <input
        type="text"
        className="rounded-full bg-zinc-200 w-96 py-1 px-4"
        placeholder="Search"
      ></input>

      <div className="flex gap-4 items-center">
        <button className="text-white  text-sm font-bold bg-blue-500 rounded-full px-4 py-2">
          Create
        </button>
        <img src="profile.jpg" className="bg-white rounded-full w-8 h-8"></img>
      </div>
    </nav>
  );
}

export default Nav;
