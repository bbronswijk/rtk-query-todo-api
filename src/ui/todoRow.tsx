import React, { useState, useEffect } from 'react';
import { Todo } from '@/models/todo';
import Checkbox from '@/ui/checkbox';

interface ComponentProps {
  todo: Todo;
}

const TodoRow = ({ todo }: ComponentProps) => {
  const [checked, setChecked] = useState(todo.completed);
  const [description, setDescription] = useState(todo.description);

  useEffect(() => {
    setDescription(description);
  }, [description]);

  const onToggleCompleted = (completed: boolean) => {
    setChecked(completed);
  };

  const deleteTodo = () => {};

  return (
    <form className='border-border group relative flex border-b'>
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`text-card-foreground w-full border-none bg-transparent py-5 pl-16 pr-6 focus:outline-none ${checked ? 'line-through opacity-25' : ''}`}
        placeholder='Describe todo...'
      />
      <Checkbox
        checked={checked}
        onChange={onToggleCompleted}
        className='absolute left-6 top-1/2 -translate-y-1/2'
      />
      <button
        type='submit'
        className='text-card-foreground hover:text-card-hover mr-6 opacity-0 duration-300 group-hover:opacity-100'
        onClick={deleteTodo}
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
