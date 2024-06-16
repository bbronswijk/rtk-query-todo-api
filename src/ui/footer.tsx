import React from 'react';
import Filter from '@/ui/filter';
import { useDeleteManyTodosMutation, useGetTodosQuery } from '@/store/api';

const Footer = () => {
  const { data: todos } = useGetTodosQuery();
  const [clearCompletedAction] = useDeleteManyTodosMutation();

  const unCompletedCount: number =
    todos?.filter((todo) => !todo.completed).length ?? 0;
  const completedIds: string[] =
    todos?.filter((todo) => todo.completed).map(({ id }) => id) ?? [];

  return (
    <footer className='grid grid-cols-2 px-6 py-4 text-xs md:grid-cols-3'>
      <div>{unCompletedCount} items left</div>
      <Filter className='hidden md:block' />
      <div className='text-right'>
        <button
          className='text-card-foreground hover:text-card-hover'
          onClick={() => clearCompletedAction(completedIds)}
        >
          Clear Completed
        </button>
      </div>
    </footer>
  );
};

export default Footer;
