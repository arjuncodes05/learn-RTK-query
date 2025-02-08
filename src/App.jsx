import { Outlet } from "react-router"
import Sidebar from "./components/Sidebar"
import AddTask from "./pages/AddTask"


function App() {
  return (
    <div className="p-4 bg-blue-100 h-screen flex gap-2">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default App
