import React from 'react'
import AddTaskImg from "../assets/AddTaskImg.svg"

function Image() {
  return (
    <div className="lg:w-2/4 lg:block hidden">
        <img src={AddTaskImg} alt="" />
    </div>
  )
}

export default Image