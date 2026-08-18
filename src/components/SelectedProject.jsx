export function SelectedProject({ project, onDelete }) {
  const formattedDueDate = new Date(project.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
  return (
    <div className="w-[35rem] mt-16 mr-2 text-center flex-1 min-w-0 bg-stone-400 p-4 rounded-md">
      <header className="border-b-2 border-stone-600 pb-4 mb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-stone-700 text-xl font-bold my-2">
            {project.title}
          </h3>
          <button
            className="px-6 py-2 my-2 text-xs md:text-base uppercase bg-red-500 text-white rounded hover:bg-stone-900 hover:text-slate-400"
            onClick={onDelete}
          >
            Delete Project
          </button>
        </div>
      </header>
      <p className="text-stone-600 text-sm mb-2">
        Due Date: {formattedDueDate}
      </p>
      <p className="text-stone-600 text-sm mb-2 whitespace-pre-wrap">
        {project.description}
      </p>
      <p className="border-t-2 border-stone-600 pb-4 mt-4 mb-4">TASKS</p>
    </div>
  );
}
