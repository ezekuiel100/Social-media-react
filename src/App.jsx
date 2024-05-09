import Feed from "./components/Feed";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#dcd9e1] h-screen">
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-6  gap-4 p-4 ">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
