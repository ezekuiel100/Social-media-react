import NewPost from "./NewPost";

const posts = [
  {
    name: "Lucas silva",
    photo: "/profile.webp",
    date: "2h",
    content: { img: "/praia.jpg", text: "Aqui tem um paragrafo" },
  },
];

function Feed() {
  return (
    <div className="w-full col-start-4 col-span-6 rounded-lg  space-y-4">
      <NewPost />
      <div className="bg-white rounded-lg h-full p-4">
        {posts.map(({ name, photo, date, content }, i) => (
          <div key={i}>
            <div className="flex gap-2 items-center">
              <img src={photo} className="w-12 rounded-full" />

              <div className="leading-tight	">
                <p className="font-semibold">{name}</p>
                <p className="text-gray-400">{date}</p>
              </div>
            </div>

            <div className="p-2 ">
              <p className="text-lg mb-2">{content.text}</p>
              <img src={content.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
