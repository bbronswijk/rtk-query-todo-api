import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CreateTodoRequest,
  CreateTodoResponse,
  DeleteTodoResponse,
  GetTodoResponse,
  PatchTodoResponse,
  Todo,
  UpdateTodoRequest,
} from '@bbronswijk/kotlin-todo-api-client';
import type { DeleteManyTodosRequest } from '@bbronswijk/kotlin-todo-api-client/src/models';

const tag = 'Todos';
const baseUrl = 'http://localhost:8080/api';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: [tag],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => `/todos`,
      transformResponse: ({ data }: GetTodoResponse) => data,
      providesTags: [{ type: tag, id: 'LIST' }],
    }),

    createTodo: builder.mutation<CreateTodoRequest, CreateTodoRequest>({
      query: (body: CreateTodoRequest) => ({
        url: `/todos`,
        method: 'POST',
        body,
      }),
      transformResponse: ({ data }: CreateTodoResponse) => data,
      invalidatesTags: [{ type: tag, id: 'LIST' }],
    }),

    updateTodo: builder.mutation<Todo | undefined, Todo>({
      query: ({ id, title, completed }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: { title, completed } satisfies UpdateTodoRequest,
      }),
      transformResponse: ({ data }: PatchTodoResponse) => data,
      invalidatesTags: [{ type: tag, id: 'LIST' }],
    }),

    deleteTodo: builder.mutation<DeleteTodoResponse, string>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      transformResponse: ({ data }) => data,
      invalidatesTags: [{ type: tag, id: 'LIST' }],
    }),

    deleteManyTodos: builder.mutation<DeleteTodoResponse, string[]>({
      query: (deleteIds) => ({
        url: `/todos`,
        method: 'DELETE',
        body: { deleteIds } satisfies DeleteManyTodosRequest,
      }),
      transformResponse: ({ data }) => data,
      invalidatesTags: [{ type: tag, id: 'LIST' }],
    }),

    toggleTodo: builder.mutation<
      Todo | undefined,
      Pick<Todo, 'id' | 'completed'>
    >({
      query: ({ id, completed }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: { completed } satisfies UpdateTodoRequest,
      }),
      transformResponse: ({ data }: PatchTodoResponse) => data,
      invalidatesTags: [{ type: tag, id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useDeleteManyTodosMutation,
  useToggleTodoMutation,
} = todoApi;
