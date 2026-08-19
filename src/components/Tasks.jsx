import NewTask from "./NewTask.jsx";
export default function Tasks({ tasks, onDeleteTask }) {
  return (
    <section className="p-4 text-left">
      <h3 className="text-2xl font-bold text-stone-500 mb-3">Tasks</h3>
      <NewTask />
      <p className="text-stone-800 m-2">
        This project does not have any tasks yet.
      </p>
      <div className="flex flex-col gap-2">task</div>
    </section>
  );
}
