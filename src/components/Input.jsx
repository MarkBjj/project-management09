export default function Input({ textarea, label, ...props }) {
  textarea = textarea || false;
  const fieldStyle =
    "w-full p-2 border-b-2 border-slate-300 rounded bg-stone-300 text-stone-600 focus-outline-none  focus-border-stone focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-2">
      <label>{label}</label>
      {textarea ? (
        <textarea className={fieldStyle} {...props} />
      ) : (
        <input
          className={fieldStyle}
          {...props}
        />
      )}
    </p>
  );
}
