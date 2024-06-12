import { Todo } from '@/api/todo';

/**
 * Get all items
 */
export const getTodosApi = async (): Promise<Todo[]> =>
  fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
    response.json()
  );

/**
 * Create a new item
 */
export const postTodoApi = async ({
  title,
  completed,
}: Pick<Todo, 'title' | 'completed'>): Promise<Todo> =>
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({ title, completed }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());

/**
 * Update an item
 */
export const patchTodoApi = async ({
  id,
  title,
}: Pick<Todo, 'id' | 'title'>): Promise<Todo> =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ title }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());

/**
 * Delete an item
 */
export const deleteTodoApi = async (id: string): Promise<string> =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
  }).then((response) => id);

/**
 * Delete an item
 */
export const deleteTodosApi = async (ids: string[]): Promise<Todo> =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${ids[0]}`, {
    method: 'DELETE',
  }).then((response) => response.json());

/**
 * Toggle item completion status
 */
export const toggleTodoApi = async ({
  id,
  completed,
}: Pick<Todo, 'id' | 'completed'>): Promise<Todo> =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
