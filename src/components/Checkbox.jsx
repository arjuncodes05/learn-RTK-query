import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useUpdateTaskMutation } from '../RTK query/apiSlice'


function Checkbox({task}) {

  function handleStatus(){
    setComplete(prev => !prev)
    if(task.status === "Pending"){
      const completedOn = new Date().toLocaleString();
      updateFunction({...task, status: "Completed", completedOn})
    } else if(task.status === "Completed"){
      updateFunction({...task, status: "Pending", completedOn: "Pending"})
    }
  }

    const [complete, setComplete] = useState(task.status === 'Pending' ? false : true)

    const [updateFunction] = useUpdateTaskMutation()

  return (
    <div
        onClick={handleStatus} 
        className="size-4 flex items-center justify-center overflow-hidden rounded-full border-2">
        {
            complete &&
            <FontAwesomeIcon className='bg-red-400' icon={faCircleCheck} />
        }
    </div>
  )
}

export default Checkbox