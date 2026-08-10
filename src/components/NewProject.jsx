import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[14rem] bg-transparent p-4">
      <menu className="flex flex-col gap-2">
        <li>
          <button className="px-2 py-1 text-xs md:text-base uppercase bg-green-500 text-white rounded hover:bg-stone-900 hover:text-slate-400">
            Save
          </button>
        </li>
        <li>
          <button className="px-1 py-2 my-2 text-xs md:text-base uppercase bg-red-500 text-white rounded hover:bg-stone-900 hover:text-slate-400">
            Cancel
          </button>
        </li>

        <div>
          Title
          <Input label="Title" />
          Description
          <Input label="Description" textarea />
          Due Date
          <Input label="Due Date" type="date" />
        </div>
      </menu>
    </div>
  );
}
