import {
  CreateTodoRequest,
  CreateTodoResponse,
  DeleteManyResponse,
  DeleteTodoResponse,
  GetTodoResponse,
  PatchTodoResponse,
  Todo,
} from '@bbronswijk/kotlin-todo-api-client';

const baseUrl = 'http://localhost:8080/api';

/**
 * Get all items
 */
export const getTodosApi = async (): Promise<Todo[]> =>
  fetch(`${baseUrl}/todos`)
    .then((response) => response.json())
    .then(({ data }: GetTodoResponse) => data);

/**
 * Create a new item
 */
export const postTodoApi = async ({
  title,
  completed,
}: CreateTodoRequest): Promise<Todo> =>
  fetch(`${baseUrl}/todos`, {
    method: 'POST',
    body: JSON.stringify({ title, completed }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(({ data }: CreateTodoResponse) => data);

/**
 * Update an item
 */
export const patchTodoApi = async ({
  id,
  title,
}: Pick<Todo, 'id' | 'title'>): Promise<Todo | undefined> =>
  fetch(`${baseUrl}/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ title }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(({ data }: PatchTodoResponse) => data);

/**
 * Delete an item
 */
export const deleteTodoApi = async (id: string): Promise<string> =>
  fetch(`${baseUrl}/todos/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then(({ data }: DeleteTodoResponse) => data);

/**
 * Delete an item
 */
export const deleteTodosApi = async (deleteIds: string[]): Promise<string[]> =>
  fetch(`${baseUrl}/todos`, {
    method: 'DELETE',
    body: JSON.stringify({
      deleteIds,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(({ data }: DeleteManyResponse) => data);

/**
 * Toggle item completion status
 */
export const toggleTodoApi = async ({
  id,
  completed,
}: Pick<Todo, 'id' | 'completed'>): Promise<Todo | undefined> =>
  fetch(`${baseUrl}/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(({ data }: PatchTodoResponse) => data);
