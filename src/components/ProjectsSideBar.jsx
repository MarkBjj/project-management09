import NewProject from "./NewProject";
import Button from "./Buttons.jsx";
export default function ProjectsSideBar({ onStartAddProject, projects, className = "" }) {
  return (
    <aside className={`w-1/5  border-x-8 px-8 py-16 bg-stone-700 md:w-72 rounded-r-xl ${className}`}>
      <h3 className="mb-2 font-bold text-stone-300 uppercase md:text-xl">
        My Project List
      </h3>

      <Button onClick={onStartAddProject}>NEW Project</Button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-white hover:bg-stone-900"
              onClick={() => console.log(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
