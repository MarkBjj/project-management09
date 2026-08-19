import NewTask from "./NewTask.jsx";
export default function Tasks({ tasks, onDelete, onAdd }) {
  return (
    <section className="p-4 text-left">
      <h3 className="text-2xl font-bold text-stone-500 mb-3">Tasks</h3>
      <NewTask onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && (
        <p className="text-stone-800 m-2">
          This project does not have any tasks yet.
        </p>
      )}
      {/* //output project tasks list - conditionally output tasks if tasks exist */}
      {tasks.length > 0 && (
        <ul className="p-4 m-6list-disc list-inside rounded bg-slate-400 text-stone-800">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between mb-2"
            >
              <span>{task.text}</span>
              <button
                className="ml-4 px-2 py-1 text-xs md:text-base uppercase bg-red-500 text-stone-600 hover:bg-stone-900 hover:text-slate-400"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
