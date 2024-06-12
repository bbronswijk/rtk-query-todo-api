import { FilterType, TodoState } from '@/store/store';
import { Todo } from '@/api/todo';

export const selectSelectedFilter = (state: TodoState): FilterType =>
  state.selectedFilter;
export const selectTodos = (state: TodoState): Todo[] => state.todos;
export const selectFilteredTodos = (
  selectedFilter: FilterType,
  todos: Todo[]
): Todo[] =>
  todos.filter((todo) => {
    switch (selectedFilter) {
      case FilterType.Active:
        return !todo.completed;
      case FilterType.Completed:
        return todo.completed;
      default:
        return true;
    }
  });
