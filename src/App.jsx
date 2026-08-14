import ProjectsSidebar from "./components/ProjectsSideBar";
//import BoxContent from "./components/BoxContent";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  //which component to show in the main content area
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  //ADD new project But handler
  function handleStartAddProject() {
    //update project state
    setProjectState((prevState) => {
      return {
        ...prevState,
        //null means that we are adding a new project
        selectedProjectId: null,
      };
    });
  }

  //var for which component to show in the main content area
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = <div>Project Content</div>;
  }

  return (
    <main className="flex h-screen w-full gap-4 bg-gray-200">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {/*output var content in the main content area */}
      {content}
    </main>
  );
}

export default App;
