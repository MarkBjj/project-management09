import { forwardRef } from "react";

// forwardRef lets a parent attach a ref straight to the underlying <input>/<textarea>
// DOM node (whichever branch renders), since refs aren't passed through custom
// components as normal props. This enables uncontrolled reads (e.g. ref.current.value)
// instead of wiring every field through state.
const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  const isTextarea = textarea || false;
  const fieldStyle =
    "w-full p-2 border-b-2 border-slate-300 rounded bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-2">
      <label>{label}</label>
      {isTextarea ? (
        <textarea ref={ref} className={fieldStyle} {...props} />
      ) : (
        <input ref={ref} className={fieldStyle} {...props} />
      )}
    </p>
  );
});

export default Input;
