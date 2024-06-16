import { Todo } from '@bbronswijk/kotlin-todo-api-client';
import { FilterType } from '@/store/filter.state';

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
