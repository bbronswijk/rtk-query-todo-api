import { Todo } from '@/api/todo';
import { FilterType } from '@/store/store';

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

export const fetchTodos = () => ({ type: ActionType.FETCH });

export const createTodo = (
  payload: Pick<Todo, 'title' | 'completed'>
): { type: ActionType.CREATE; payload: Pick<Todo, 'title' | 'completed'> } => ({
  type: ActionType.CREATE,
  payload,
});

export const updateTodo = (
  payload: Pick<Todo, 'id' | 'title'>
): { type: ActionType.UPDATE; payload: Pick<Todo, 'id' | 'title'> } => ({
  type: ActionType.UPDATE,
  payload,
});

export const deleteTodo = (
  payload: Pick<Todo, 'id'>
): { type: ActionType.DELETE; payload: Pick<Todo, 'id'> } => ({
  type: ActionType.DELETE,
  payload,
});

export const toggleTodo = (
  payload: Pick<Todo, 'id' | 'completed'>
): { type: ActionType.TOGGLE; payload: Pick<Todo, 'id' | 'completed'> } => ({
  type: ActionType.TOGGLE,
  payload,
});

export const setSelectedFilter = (
  payload: FilterType
): { type: ActionType.SET_SELECTED_FILTER; payload: FilterType } => ({
  type: ActionType.SET_SELECTED_FILTER,
  payload,
});

export const clearCompleted = (
  payload: string[]
): { type: ActionType.CLEAR_COMPLETED; payload: string[] } => ({
  type: ActionType.CLEAR_COMPLETED,
  payload,
});

export type Actions =
  | { type: ActionType.FETCH }
  | { type: ActionType.FETCH_SUCCESS; payload: Todo[] }
  | { type: ActionType.CREATE; payload: Pick<Todo, 'title' | 'completed'> }
  | { type: ActionType.CREATE_SUCCESS; payload: Todo }
  | { type: ActionType.UPDATE; payload: Pick<Todo, 'id' | 'title'> }
  | { type: ActionType.UPDATE_SUCCESS; payload: Todo }
  | { type: ActionType.DELETE; payload: Pick<Todo, 'id'> }
  | { type: ActionType.DELETE_SUCCESS; payload: string }
  | { type: ActionType.TOGGLE; TOGGLE: Pick<Todo, 'id' | 'completed'> }
  | { type: ActionType.TOGGLE_SUCCESS; payload: Todo }
  | { type: ActionType.SET_SELECTED_FILTER; payload: FilterType }
  | { type: ActionType.CLEAR_COMPLETED; payload: string[] }
  | { type: ActionType.CLEAR_COMPLETED_SUCCESS; payload: string[] };
