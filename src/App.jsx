import { Outlet } from "react-router"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className=" bg-blue-50 h-screen flex flex-col md:flex-row gap-5 w-full">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default App
