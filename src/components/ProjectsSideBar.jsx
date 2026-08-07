export default function ProjectsSideBar() {
  return (
    <aside className="w-1/4  border-x-8 py-16 bg-stone-700">
      <h3>My Project List</h3>

      <div className="w-[16rem] bg-purple-400 p-4">
        <button>NEW Project</button>
        <ul>
          <li>Project 1</li>
          <li>Project II</li>
        </ul>
      </div>
    </aside>
  );
}
