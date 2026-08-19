export default function NewTask({ tasks, onDeleteTask }) {
  return (
    <div className="flex items-center gap-4 p-4">
      <input
        type="text"
        className="w-64 border-gray-300 bg-slate-300 py-2 px-2 rounded"
        placeholder="Task title"
      />
      <button className="bg-blue-700 text-black py-1 px-1 hover:bg-blue-600 rounded">
        Add Task
      </button>
    </div>
  );
}
