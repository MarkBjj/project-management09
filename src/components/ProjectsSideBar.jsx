import NewProject from "./NewProject";
import Button from "./Buttons.jsx";
export default function ProjectsSideBar({ onStartAddProject }) {
  return (
    <aside className="w-1/5  border-x-8 px-8 py-16 bg-stone-700 md:w-72 rounded-r-xl">
      <h3 className="mb-2 font-bold text-stone-300 uppercase md:text-xl">
        My Project List
      </h3>

      <div className="w-[14rem] bg-transparent p-4">
        <Button onClick={onStartAddProject}>NEW Project</Button>
      </div>
    </aside>
  );
}
