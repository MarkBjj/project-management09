import ProjectsSidebar from "./components/ProjectsSideBar";
//import BoxContent from "./components/BoxContent";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  //which component to show in the main content area
  const [selectedProject, setSelectedProject] = useState({
    selectedProject: undefined,
  });

  return (
    <main className="flex h-screen w-full my-6 gap-4 bg-gray-200">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
