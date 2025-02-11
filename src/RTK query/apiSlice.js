import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    tagTypes: ['Tasks'],
    endpoints: (builder) => {
        return {
            getTasks: builder.query({
                query: () => "/tasks",
                providesTags: ['Tasks']
            }),
            addTask: builder.mutation({
                query: (newTask) => {
                    return {
                        url: "/tasks",
                        method: "POST",
                        body: newTask
                    }
                },
                invalidatesTags: ['Tasks']
            }),
            updateTask: builder.mutation({
                query: ({id, ...updatedTask}) => {
                    return {
                        url: `/tasks/${id}`,
                        method: "PATCH",
                        body: updatedTask
                    }
                },
                invalidatesTags: ['Tasks']
            }),
            deleteTask: builder.mutation({
                query: (id) => {
                    return {
                        url: `/tasks/${id}`,
                        method: "DELETE"
                    }
                },
                invalidatesTags: ['Tasks']
            })
        }
    }
})


export const {useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation} = apiSlice
export default apiSlice