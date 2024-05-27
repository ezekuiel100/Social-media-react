function Nav() {
  return (
    <nav className="p-2 bg-white flex justify-around items-center">
      <h1 className="font-bold text-2xl">Logo</h1>
      <input
        type="text"
        className="rounded-full bg-zinc-200 md:w-96 py-1 px-4"
        placeholder="Search"
      ></input>

      <img src="profile.webp" className="bg-white rounded-full w-8 h-8"></img>
    </nav>
  );
}

export default Nav;
