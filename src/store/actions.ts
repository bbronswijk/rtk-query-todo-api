import { DeleteTodoResponse, Todo } from '@bbronswijk/kotlin-todo-api-client';
import { FilterType } from '@/store/store';
import { DeleteManyResponse } from '@bbronswijk/kotlin-todo-api-client/src/models/DeleteManyResponse';

export enum ActionType {
  FETCH = 'FETCH',
  FETCH_SUCCESS = 'FETCH_SUCCESS',

  CREATE = 'CREATE',
  CREATE_SUCCESS = 'CREATE_SUCCESS',

  UPDATE = 'UPDATE',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',

  DELETE = 'DELETE',
  DELETE_SUCCESS = 'DELETE_SUCCESS',

  TOGGLE = 'TOGGLE',
  TOGGLE_SUCCESS = 'TOGGLE_SUCCESS',

  SET_SELECTED_FILTER = 'SET_SELECTED_FILTER',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  CLEAR_COMPLETED_SUCCESS = 'CLEAR_COMPLETED_SUCCESS',
}

export type TodoActions =
  | ReturnType<typeof fetchTodosAction>
  | ReturnType<typeof fetchTodosSuccessAction>
  | ReturnType<typeof createTodoAction>
  | ReturnType<typeof createTodoSuccessAction>
  | ReturnType<typeof updateTodoAction>
  | ReturnType<typeof updateTodoSuccessAction>
  | ReturnType<typeof deleteTodoAction>
  | ReturnType<typeof deleteTodoSuccessAction>
  | ReturnType<typeof toggleTodoAction>
  | ReturnType<typeof toggleTodoSuccessAction>
  | ReturnType<typeof clearCompletedSuccessAction>
  | ReturnType<typeof setSelectedFilterAction>;

export const fetchTodosAction = () => ({ type: ActionType.FETCH });

export const fetchTodosSuccessAction = (todos: Todo[]) => ({
  type: ActionType.FETCH_SUCCESS,
  payload: todos.slice(0, 10),
});

export const createTodoAction = (
  payload: Pick<Todo, 'title' | 'completed'>
) => ({
  type: ActionType.CREATE,
  payload,
});

export const createTodoSuccessAction = (todo: Todo) => ({
  type: ActionType.CREATE_SUCCESS,
  payload: todo,
});

export const updateTodoAction = (payload: Pick<Todo, 'id' | 'title'>) => ({
  type: ActionType.UPDATE,
  payload,
});

export const updateTodoSuccessAction = (todo: Todo) => ({
  type: ActionType.UPDATE_SUCCESS,
  payload: todo,
});

export const deleteTodoAction = (payload: Pick<Todo, 'id'>) => ({
  type: ActionType.DELETE,
  payload,
});

export const deleteTodoSuccessAction = (id: DeleteTodoResponse['data']) => ({
  type: ActionType.DELETE_SUCCESS,
  payload: id,
});

export const toggleTodoAction = (payload: Pick<Todo, 'id' | 'completed'>) => ({
  type: ActionType.TOGGLE,
  payload,
});

export const clearCompletedAction = (payload: string[]) => ({
  type: ActionType.CLEAR_COMPLETED,
  payload,
});

export const clearCompletedSuccessAction = (
  ids: DeleteManyResponse['data']
) => ({
  type: ActionType.CLEAR_COMPLETED_SUCCESS,
  payload: ids,
});

export const toggleTodoSuccessAction = (todo: Todo) => ({
  type: ActionType.TOGGLE_SUCCESS,
  payload: todo,
});

export const setSelectedFilterAction = (
  payload: FilterType
): { type: ActionType.SET_SELECTED_FILTER; payload: FilterType } => ({
  type: ActionType.SET_SELECTED_FILTER,
  payload,
});
