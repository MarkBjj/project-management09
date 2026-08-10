import ProjectsSidebar from "./components/ProjectsSideBar";
//import BoxContent from "./components/BoxContent";
import NewProject from "./components/NewProject";
function App() {
  return (
    <main className="flex h-screen w-screen my-8 gap-8 bg-gray-100">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
