import React from "react";
import { useDeleteTaskMutation, useGetTasksQuery } from "../RTK query/apiSlice";
import SingleTask from "../components/SingleTask";
import Image from "./Image";

function TaskPage({when}) {

  let {data} = useGetTasksQuery();
  const [deleteFunction, a] = useDeleteTaskMutation()

  return (
    <div className="flex w-full items-center justify-around p-2 md:p-4">
      <div className="no-scrollbar flex overflow-scroll space-y-4 h-full w-full flex-col gap-2 p-2 lg:w-3/5 xl:w-2/4 xl:p-6">
        {/* task */}
        {
          data?.filter((task) => task.category === when)
            .map((task) => (
              <SingleTask key={task.id} deleteFunction={deleteFunction} task={task}/>
            ))
        }

      </div>

      <Image/>
    </div>
  );
}

export default TaskPage;