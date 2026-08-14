import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
  //get the form data
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      // form validation...
    };

    // LIFT values back to App.jsx because the projects[] state is there, and we want to update it from here
    onAdd(newProject);
  }

  return (
    <div className="w-[35rem] mt-16 bg-transparent p-4">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="px-2 py-2 text-xs md:text-base uppercase bg-green-500 text-white rounded hover:bg-stone-900 hover:text-slate-400"
            onClick={handleSave}
          >
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
        <Input label="Title" type="text" ref={titleRef} />

        <Input label="Description" ref={descriptionRef} textarea />

        <Input label="Due Date" ref={dueDateRef} type="date" />
      </div>
    </div>
  );
}
