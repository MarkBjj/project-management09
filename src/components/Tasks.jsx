export default function Tasks({ tasks, onDeleteTask }) {
  return (
    <section className="p-4">
      <h3 className="text-2xl font-bold text-stone-500 mb-3">Tasks</h3>
      <p>NEW Task</p>
      <p className="text-stone-800 m-2">
        This project does not have any tasks yet.
      </p>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
