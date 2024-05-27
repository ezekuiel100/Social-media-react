import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#dcd9e1] min-h-screen pb-10">
      <Nav />
      <div className="grid sm:flex gap-6 p-4 max-w-5xl mx-auto">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
