import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Status({id, text, value, setValue}) {
  return (
    <div
      id={id}
      value={value}
      onClick={() => setValue(prev => ({...prev, [id]: text}))} 
      className="flex items-center gap-2 hover:cursor-pointer">
        <div className="border flex items-center justify-center size-4 overflow-hidden rounded-full">
          {text === value && <FontAwesomeIcon className={`${value === 'Completed' ? 'bg-green-400'  : 'bg-red-400'}`} icon={faCircleCheck} />}
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Status