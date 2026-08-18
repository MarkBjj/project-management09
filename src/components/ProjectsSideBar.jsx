import NewProject from "./NewProject";
import Button from "./Buttons.jsx";

export default function ProjectsSideBar({
  className = "",
  onStartAddProject,
  projects,
  onSelectProject,
  onSelectProjectId,
}) {
  return (
    <aside
      className={`w-1/5 border-x-8 px-8 py-16 bg-stone-700 md:w-72 rounded-r-xl ${className}`}
    >
      <h3 className="mb-2 font-bold text-stone-300 uppercase md:text-xl">
        My Project List
      </h3>

      <Button onClick={onStartAddProject}>NEW Project</Button>
      <ul>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-white hover:bg-stone-900";

          //check if project id is active - change css classes to highlight the selected project in the sidebar
          if (project.id === onSelectProjectId) {
            cssClasses += " bg-stone-800 text-stone-300";
          } else {
            cssClasses += " text-stone-400 hover:text-white hover:bg-stone-900";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
