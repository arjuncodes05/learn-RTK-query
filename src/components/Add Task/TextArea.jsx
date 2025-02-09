import React from 'react'

function TextArea({id, placeholder, value, setValue}) {
  return (
    <textarea
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(prev => ({...prev, [id]: e.target.value}))}
        className="h-24 rounded border border-slate-200 bg-white p-2 font-semibold outline-0"
  />
  )
}

export default TextArea