import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 ${text === "Add" ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"} rounded px-6 font-semibold text-white`}
    >
      {text}
    </button>
  );
}

export default Button;
