import React, { useState } from "react";
import Label from "../components/Add Task/Label";
import Input from "../components/Add Task/Input";
import TextArea from "../components/Add Task/TextArea";
import Status from "../components/Add Task/Status";
import Button from "../components/Add Task/Button";

import AddTaskImg from "../assets/AddTaskImg.svg"
import Dropdown from "../components/Add Task/Dropdown";
import Error from "../components/Add Task/Error";
import validateForm from "../customHook/ValidateNewTask";
import { useAddTaskMutation } from "../RTK query/apiSlice";

function AddTask() {

  const [newTask, setNewTask] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    status: "Pending",
    category: ""
  })

  let [addTask, addTaskResult] = useAddTaskMutation();
  const {isSuccess} = addTaskResult;
  
  const [error, setError] = useState({
    title: "",
    description: "",
    category: ""
  })

  async function handleSubmit(){
    const validationResult = validateForm(newTask, setError)   

    if(Object.keys(validationResult).length) return

    await addTask(newTask);

    if(isSuccess){
      resetForm()
    }
  }


  function resetForm(){
    setNewTask({
      id: "",
      title: "",
      description: "",
      status: "Pending",
      category: ""
    })
  }

  return (
    <div className="w-full flex items-center justify-around p-4">
      <div className="xl:w-2/4 lg:w-3/5 w-full flex flex-col gap-2 p-2 xl:p-6">
        <h2 className="font-bold text-xl text-gray-700">Add new task</h2>
        <hr className="text-gray-300 mb-6"/>
        <div className="flex flex-col gap-2 mb-2">
          <Label tag="Title" htmlFor="title"/>
          <Input id="title" placeholder="Enter a task..." value={newTask.title} setValue={setNewTask} />
          <Error error={error?.title}/>
        </div>

        <div className="flex flex-col gap-2 mb-4">
        <Label tag="Description" htmlFor="description" />
        <TextArea value={newTask.description} setValue={setNewTask} id="description" placeholder="You can describe your task here..." />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <Label tag="Status" htmlFor="status" />
          <div className="flex gap-8">
            <Status id="status" text="Completed" setValue={setNewTask} value={newTask.status} />
            <Status id="status" text="Pending" setValue={setNewTask}  value={newTask.status} />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <Label tag="Category" htmlFor="Category" />
          <Dropdown id="category" value={newTask.category} setValue={setNewTask} options={["Daily", "Weekly", "Yearly", "Anytime"]}/>
          <Error error={error?.category}/>
        </div>

        <div className="space-x-5">
        <Button text="Add" onClick={handleSubmit}/>
        <Button text="Reset" onClick={resetForm}/>
        </div>


      </div>
      <div className="lg:w-2/4 lg:block hidden">
        <img src={AddTaskImg} alt="" />
      </div>
    </div>
  );
}

export default AddTask;
