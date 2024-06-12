import React from 'react';
import Filter from '@/ui/filter';
import { Todo } from '@/api/todo';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '@/store/selectors';
import { clearCompleted } from '@/store/actions';

const Footer = () => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector(selectTodos);

  const unCompletedCount = todos.filter((todo) => !todo.completed).length;
  const completedIds: string[] = todos
    .filter((todo) => todo.completed)
    .map(({ id }) => id);

  return (
    <footer className='grid grid-cols-2 px-6 py-4 text-xs md:grid-cols-3'>
      <div>{unCompletedCount} items left</div>
      <Filter className='hidden md:block' />
      <div className='text-right'>
        <button
          className='text-card-foreground hover:text-card-hover'
          onClick={() => dispatch(clearCompleted(completedIds))}
        >
          Clear Completed
        </button>
      </div>
    </footer>
  );
};

export default Footer;
