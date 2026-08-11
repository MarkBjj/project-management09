export default function Button({ children, ...props }) {
  return (
    <div className="w-[14rem] bg-transparent p-4">
      <button
        className="px-4 py-4 my-2 text-xs md:text-base uppercase bg-stone-500 text-white rounded hover:bg-stone-900 hover:text-slate-400"
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
