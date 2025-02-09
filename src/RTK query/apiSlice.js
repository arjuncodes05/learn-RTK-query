import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    endpoints: (builder) => {
        return {
            addTask: builder.mutation({
                query: (newTask) => {
                    return {
                        url: "/tasks",
                        method: "POST",
                        body: newTask
                    }
                }
            })
        }
    }
})


export const {useAddTaskMutation} = apiSlice
export default apiSlice