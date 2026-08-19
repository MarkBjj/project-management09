import { useState } from "react";

// Renders a text input + "Add Task" button and tracks the in-progress
// task title as local state (controlled via onChange, not value, so the
// input is currently uncontrolled/does not reset after submit).
export default function NewTask({ tasks, onDelete, onAdd }) {
  // Holds whatever the user has typed so far.
  const [enteredTask, setEnteredTask] = useState();

  // Fired on every keystroke; syncs state with the input's current value.
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    // Call the onAddTask prop function, passing the current task title.
    onAdd(enteredTask);
    // Clear the input field after adding the task.
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4 p-4">
      <input
        type="text"
        className="w-64 border-gray-300 bg-slate-300 py-2 px-2 rounded"
        placeholder="Task title"
        onChange={handleChange}
        value={enteredTask}
      />
      {/* // tasks[] is in App.jsx */}
      <button
        className="bg-blue-700 text-black py-1 px-1 hover:bg-blue-600 rounded"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
