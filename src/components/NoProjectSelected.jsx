import NoImage from "../assets/no-projects.png";
import Button from "./Buttons.jsx";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-12 mr-2 text-center flex-1 min-w-0 bg-stone-400 p-4 rounded-md">
      <img
        src={NoImage}
        alt="No Project Selected"
        className="mx-auto mb-4 w-16 h-16 object-contain"
      />
      <h3 className="text-stone-500 text-xl font-bold my-4">Empty Task List</h3>
      <p className="text-stone-600 text-sm mb-2">
        Please select a project from the sidebar or create a new project.
      </p>
      <div className="mt-8 flex justify-center">
        <Button onClick={onStartAddProject}>Create New</Button>
      </div>
    </div>
  );
}
