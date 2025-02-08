import React from "react";
import { NavLink } from "react-router";

function Sidebar() {
  return (
    <div className="h-full w-70">
      <div className="flex h-full flex-col gap-14 rounded-md border-gray-400 bg-slate-300 p-4 text-xl font-semibold text-white shadow-xs [&>*]:rounded-md [&>*]:bg-slate-400 [&>*]:p-5">
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
