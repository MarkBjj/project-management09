import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
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

    // form validation - check empty fields
    if (
      titleRef.current.value.trim() === "" ||
      descriptionRef.current.value.trim() === "" ||
      dueDateRef.current.value.trim() === ""
    ) {
      // display error message or handle invalid input
      console.log("Show error modal");
      modal.current.open(); // open the modal to show the error message
      return; // exit the function early to prevent adding the project
    }

    // LIFT values back to App.jsx because the projects[] state is there, and we want to update it from here
    onAdd(newProject);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h3 className="text-red-500">Please fill in all fields.</h3>
        <p>OOpppps! You missed something.</p>
        <p>Try again!</p>
      </Modal>
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
            <button
              className="px-6 py-2 my-2 text-xs md:text-base uppercase bg-red-500 text-white rounded hover:bg-stone-900 hover:text-slate-400"
              onClick={onCancel}
            >
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
    </>
  );
}
