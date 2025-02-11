import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function SingleTask({task, deleteFunction}) {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <div className="flex justify-between rounded bg-yellow-200 p-2 shadow-sm hover:shadow-md">
        <div className="flex items-center gap-4">

          {/* checkbox */}
          <Checkbox task={task}/>

          <h2 className="font-semibold">{task?.title}</h2>
        </div>

        <div className="flex gap-4 items-center">
          <FontAwesomeIcon className="p-2 text-lg text-red-600 hover:text-red-700" onClick={() => deleteFunction(task.id)} icon={faTrash} />
        </div>
      </div>
      <div className="shadow-xs hover:shadow-sm rounded">
        {
          showDetails && <p className="p-2 opacity-60 text-sm font-medium tracking-wide">{task?.description || <span className="opacity-50">No Description</span>}</p>
        }
      </div>

      <div className="my-2 flex justify-between text-xs font-semibold">
        <p
          onClick={() => setShowDetails(prev => !prev)} 
          className="hover:shadow-sm p-1 rounded">{showDetails ? 'Less' : 'More'}</p>
        <p>
          Created on: <span className="font-normal">{task?.createdOn}</span>
        </p>
        <p>
          Completed on: <span className="font-normal">{task?.completedOn}</span>
        </p>
      </div>
    </div>
  );
}

export default SingleTask;
