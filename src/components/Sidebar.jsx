import React from "react";

function Sidebar() {
  return (
    <div className="h-full w-70">
      <ul className="flex h-full flex-col gap-14 rounded-md border-gray-400 bg-slate-300 p-4 text-xl font-semibold text-white shadow-xs [&>*]:rounded-md [&>*]:bg-slate-400 [&>*]:p-5">
        <li className="hover:bg-slate-500">Add Task</li>
        <li className="hover:bg-slate-500">Daily</li>
        <li className="hover:bg-slate-500">Weekly</li>
        <li className="hover:bg-slate-500">Yearly</li>
        <li className="hover:bg-slate-500">Any time</li>
      </ul>
    </div>
  );
}

export default Sidebar;
