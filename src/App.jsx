import ProjectsSidebar from "./components/ProjectsSidebar";
import BoxContent from "./components/BoxContent";
function App() {
  return (
    <main className="flex h-screen w-screen my-8 bg-gray-100">
      <ProjectsSidebar />
      <BoxContent />
    </main>
  );
}

export default App;
