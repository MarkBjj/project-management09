import NewProject from "./NewProject";
export default function ProjectsSideBar() {
  return (
    <aside className="w-1/4  border-x-8 px-8 py-16 bg-stone-700 md:w-72 rounded-r-xl">
      <h3 className="mb-2 font-bold text-stone-300 uppercase md:text-xl">
        My Project List
      </h3>

      <div className="w-[14rem] bg-transparent p-4">
        <button className="px-4 py-4 my-2 text-xs md:text-base uppercase bg-stone-500 text-white rounded hover:bg-stone-900 hover:text-slate-400">
          NEW Project
        </button>
      </div>
    </aside>
  );
}
