import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#dcd9e1] min-h-screen pb-10">
      <Nav />
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-6 p-4  ">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
