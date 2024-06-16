import React, { useState, useEffect } from 'react';
import { Todo } from '@bbronswijk/kotlin-todo-api-client';
import Checkbox from '@/ui/checkbox';

import { useDebounce } from '@/utils/debounce.hook';
import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
  useUpdateTodoMutation,
} from '@/store/api';

interface ComponentProps {
  todo: Todo;
}

const TodoRow = ({ todo }: ComponentProps) => {
  const [toggleTodoAction] = useToggleTodoMutation();
  const [updateTodoAction] = useUpdateTodoMutation();
  const [deleteTodoAction] = useDeleteTodoMutation();
  const [title, setTitle] = useState<string | undefined>(todo.title);
  const debouncedInputValue = useDebounce(title, 600);

  useEffect(() => {
    if (debouncedInputValue && debouncedInputValue !== todo.title) {
      updateTodoAction({ ...todo, title: debouncedInputValue });
    }
  }, [debouncedInputValue]);

  return (
    <form className='group relative flex border-b border-border'>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`w-full border-none bg-transparent py-5 pl-16 pr-6 text-card-foreground focus:outline-none ${todo.completed ? 'line-through opacity-25' : ''}`}
        placeholder='Describe todo...'
      />
      <Checkbox
        checked={todo.completed}
        onChange={(completed) => toggleTodoAction({ id: todo.id, completed })}
        className='absolute left-6 top-1/2 -translate-y-1/2'
      />
      <button
        type='button'
        className='mr-6 text-card-foreground opacity-0 duration-300 hover:text-card-hover group-hover:opacity-100'
        onClick={() => deleteTodoAction(todo.id)}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
          <path
            fill='currentcolor'
            fillRule='evenodd'
            d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
          />
        </svg>
      </button>
    </form>
  );
};

export default TodoRow;
