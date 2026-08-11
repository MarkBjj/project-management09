import ProjectsSidebar from "./components/ProjectsSideBar";
//import BoxContent from "./components/BoxContent";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  return (
    <main className="flex h-screen w-full my-8 gap-4 bg-gray-200">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
