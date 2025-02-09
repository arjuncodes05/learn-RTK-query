import React from 'react'

function Input({id, placeholder, value, setValue}) { 
  return (
    <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(prev => ({...prev, [id]: e.target.value} ))}
        // onChange={handleChange}
        className="rounded border border-slate-200 bg-white p-2 font-semibold outline-0"
  />
  )
}

export default Input