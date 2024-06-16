'use client';

import TodoRow from '@/ui/todoRow';
import { useGetTodosQuery } from '@/store/api';
import { useAppSelector } from '@/store/store';
import { selectSelectedFilter } from '@/store/filter.state';
import { selectFilteredTodos } from '@/store/selectFilteredTodos';
import { Todo } from '@bbronswijk/kotlin-todo-api-client';

const TodoList = () => {
  const { data: todos, isLoading } = useGetTodosQuery();
  const selectedFilter = useAppSelector(selectSelectedFilter);

  if (isLoading) {
    return (
      <div className='border-b border-border p-6 text-center'>
        Fetching todos 🤓
      </div>
    );
  }

  const filteredTodos = selectFilteredTodos(selectedFilter, todos as Todo[]);

  if (!filteredTodos || filteredTodos.length === 0) {
    return (
      <div className='border-b border-border p-6 text-center'>
        Create a todo and start being productive! 🤓
      </div>
    );
  }

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoRow key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
