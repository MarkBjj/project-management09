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

  //add CANCEL button
  function handleCancelAddProject() {
    //update project state
    setProjectState((prevState) => {
      return {
        ...prevState,
        //null means that we are adding a new project
        selectedProjectId: undefined,
      };
    });
  }

  //ADD new project, called from NewProject once the form is saved
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = { ...projectData, id: Math.random().toString() };
      return {
        ...prevState,
        selectedProjectId: undefined,
        // spread creates a new array (don't mutate state) with newProject appended at the end
        // and not losing the previous projects in the array
        projects: [...prevState.projects, newProject],
      };
    });
  }
  //test to see if the new project is being added to the projects array in state
  console.log("projects array in state:", projectState.projects);

  //var for which component to show in the main content area
  let content;
  if (projectState.selectedProjectId === null) {
    //adding a new project, show the NewProject component
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    //no project selected, show the NoProjectSelected component
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = <div>Project Content</div>;
  }

  return (
    <main className="flex h-screen w-full gap-4 bg-gray-200">
      {/* //LIST the projects array in the sidebar, and pass the onStartAddProject */}
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        className="mt-8"
      />
      {/*output var content in the main content area */}
      {content}
    </main>
  );
}

export default App;
