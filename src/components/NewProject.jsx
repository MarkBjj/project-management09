import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16 bg-transparent p-4">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="px-2 py-2 text-xs md:text-base uppercase bg-green-500 text-white rounded hover:bg-stone-900 hover:text-slate-400">
            Save
          </button>
        </li>
        <li>
          <button className="px-6 py-2 my-2 text-xs md:text-base uppercase bg-red-500 text-white rounded hover:bg-stone-900 hover:text-slate-400">
            Cancel
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />

        <Input label="Description" textarea />

        <Input label="Due Date" type="date" />
      </div>
    </div>
  );
}
