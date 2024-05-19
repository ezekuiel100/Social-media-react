import Feed from "./components/Feed";
import Nav from "./components/Nav";
import Requests from "./components/Requests";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#dcd9e1] h-screen">
      <Nav />
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12  gap-6 p-4 ">
          <Sidebar />
          <Feed />
          <Requests />
        </div>
      </div>
    </div>
  );
}

export default App;
