import React, { useState } from "react";
import Label from "../components/Add Task/Label";
import Input from "../components/Add Task/Input";
import TextArea from "../components/Add Task/TextArea";
import Status from "../components/Add Task/Status";
import Button from "../components/Button";

import Dropdown from "../components/Add Task/Dropdown";
import Error from "../components/Add Task/Error";
import validateForm from "../customHook/ValidateNewTask";
import { useAddTaskMutation, useGetTasksQuery } from "../RTK query/apiSlice";
import Image from "../components/Image";

function AddTask() {

  const {data} = useGetTasksQuery()

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    category: ""
  })

  let [addTask, addTaskResult] = useAddTaskMutation();

  const [error, setError] = useState({
    title: "",
    description: "",
    category: ""
  })

  async function handleSubmit(){
    const validationResult = validateForm(newTask, setError)   

    if(Object.keys(validationResult).length) return

    const createdOn = new Date().toLocaleString();
    const completedOn = newTask.status === 'Pending' ? 'Pending' : createdOn

    await addTask({...newTask, createdOn, completedOn, id: (data.length ? `${data.length + 1}` : '1')});
    resetForm()
  }

  function resetForm(){
    setNewTask({
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
          <Dropdown id="category" value={newTask.category} setValue={setNewTask} options={["Daily", "Weekly", "Monthly", "Yearly", "Anytime"]}/>
          <Error error={error?.category}/>
        </div>

        <div className="space-x-5 flex">
          <Button text="Add" onClick={handleSubmit} bg="bg-blue-400" onHover="hover:bg-blue-500"/>
          <Button text="Reset" onClick={resetForm} bg="bg-red-500" onHover="hover:bg-blue-600"/>
        </div>

      </div>
      <Image/>
    </div>
  );
}

export default AddTask;
