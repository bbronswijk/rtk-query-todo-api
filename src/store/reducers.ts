import {
  createTodoSuccessAction,
  deleteTodoSuccessAction,
  toggleTodoSuccessAction,
  setSelectedFilterAction,
  clearCompletedSuccessAction,
  fetchTodosSuccessAction,
} from '@/store/actions';
import { TodoState } from '@/store/store';

export const fetchSuccessReducer = (
  state: TodoState,
  action: ReturnType<typeof fetchTodosSuccessAction>
): TodoState => ({ ...state, todos: action.payload });

export const createSuccessReducer = (
  state: TodoState,
  action: ReturnType<typeof createTodoSuccessAction>
): TodoState => ({ ...state, todos: [action.payload, ...state.todos] });

export const deleteSuccessReducer = (
  state: TodoState,
  action: ReturnType<typeof deleteTodoSuccessAction>
): TodoState => ({
  ...state,
  todos: state.todos.filter((todo) => todo.id !== action.payload),
});

export const toggleSuccessReducer = (
  state: TodoState,
  action: ReturnType<typeof toggleTodoSuccessAction>
): TodoState => ({
  ...state,
  todos: state.todos.map((todo) =>
    todo.id === action.payload.id ? action.payload : todo
  ),
});

export const setSelectedFilterReducer = (
  state: TodoState,
  action: ReturnType<typeof setSelectedFilterAction>
): TodoState => ({
  ...state,
  selectedFilter: action.payload,
});

export const clearCompletedSuccessReducer = (
  state: TodoState,
  action: ReturnType<typeof clearCompletedSuccessAction>
): TodoState => ({
  ...state,
  todos: state.todos.filter((todo) => !action.payload.includes(todo.id)),
});
