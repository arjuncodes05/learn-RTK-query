import React from 'react'

function Label({tag, htmlFor}) {
  return (
    <label 
        htmlFor={htmlFor}
        className="font-bold md:text-lg text-gray-700"  
    >{tag}</label>
  )
}

export default Label