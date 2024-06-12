import { Actions, ActionType } from '@/store/actions';
import { initialState, TodoState } from '@/store/store';

export const reducer = (
  state: TodoState = initialState,
  action: Actions
): TodoState => {
  switch (action.type) {
    case ActionType.FETCH_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case ActionType.CREATE_SUCCESS:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case ActionType.DELETE_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ActionType.TOGGLE_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case ActionType.SET_SELECTED_FILTER:
      return {
        ...state,
        selectedFilter: action.payload,
      };
    case ActionType.CLEAR_COMPLETED_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};
