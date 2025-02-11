import React from "react";

function Button({ text, onClick, bg, onHover}) {
  return (
    <button
      onClick={onClick}
      className={`w-14 flex items-center justify-center py-2 ${bg} cursor-pointer rounded px-6 font-semibold text-white ${onHover}`}
    >
      {text}
    </button>
  );
}

export default Button;
