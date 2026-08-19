import ProjectsSidebar from "./components/ProjectsSideBar";
//import BoxContent from "./components/BoxContent";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import { SelectedProject } from "./components/SelectedProject";
function App() {
  //which component to show in the main content area
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // ADD New Task function handler - called from NewTask.jsx when the "Add Task" button is clicked
  function handleAddTask(text, taskData) {
    setProjectState((prevState) => {
      const taskId = Math.random().toString();
      //create NEW task Object with the new task data, including the projectId and a unique id
      const newTask = {
        ...taskData,
        projectId: prevState.selectedProjectId,
        id: taskId,
        text: text,
      };
      // add new task to the tasks array in state, and also add it to the tasks array of the selected project
      return {
        ...prevState,
        // find the selected project and add the new task to its tasks array
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  //DELETE Task button handler - remove from tasks[]
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        // remove the task from the flat tasks array
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

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

  //DELETE project button handler - remove from projects[]
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        //filter out the currently selected project from the projects array
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  }

  //project DETAILS button handler
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
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

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId,
  );
  //var for which component to show in the main content area
  let content;
  // selectedProjectId is explicitly set to null by handleStartAddProject
  // when the "NEW Project" button is clicked, so show the creation form
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
    // selectedProjectId is undefined in the initial state and after
    // handleCancelAddProject resets it, meaning no project is chosen yet
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    // any other value is a real project id set by handleSelectProject,
    // so render the matching project's full details
  } else {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onSelectedProjectId={projectState.selectedProjectId}
        tasks={projectState.tasks.filter(
          (task) => task.projectId === projectState.selectedProjectId,
        )}
      />
    );
  }

  return (
    <main className="flex h-screen w-full gap-4 bg-gray-200">
      {/* //LIST the projects array in the sidebar, and pass the onStartAddProject */}
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
        className="mt-8"
      />
      {/*output var content in the main content area */}
      {content}
    </main>
  );
}

export default App;
