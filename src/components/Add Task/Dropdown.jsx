import React from 'react'

function Dropdown({id, options, value, setValue}) {
  return (
    <select onChange={(e) => {      
      setValue(prev => ({...prev, [id]: e.target.value}))
      }} 
      id={id} 
      value={value}
      className="p-2 border-slate-200 bg-slate-50 border-2 rounded">
        <option value="HI" hidden>Select</option>
        {
            options.map(opt => {
                return <option key={opt} value={opt}>{opt}</option>
            })
        }
    </select>
  )
}

export default Dropdown