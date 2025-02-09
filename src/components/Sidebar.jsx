import React from "react";
import { NavLink } from "react-router";

function Sidebar() {

  return (
    <div className="md:h-full md:w-60 lg:w-70">
      <div className="flex flex-wrap gap-2 md:justify-center justify-around md:h-full md:flex-col md:gap-14 border-gray-400 bg-slate-300 p-4 text-sm sm:text-md md:text-lg xl:text-xl font-semibold text-white shadow-xs [&>*]:rounded-md [&>*]:bg-slate-400 [&>*]:p-2 md:[&>*]:p-4 xl:[&>*]:p-5">
        <NavLink to="/new" className="hover:bg-slate-500">Add Task</NavLink>
        <NavLink to="/" className="hover:bg-slate-500">Daily</NavLink>
        <NavLink to="/weekly" className="hover:bg-slate-500">Weekly</NavLink>
        <NavLink to="/yearly" className="hover:bg-slate-500">Yearly</NavLink>
        <NavLink to="/anytime" className="hover:bg-slate-500">Any time</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
