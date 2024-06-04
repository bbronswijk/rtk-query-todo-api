import React from 'react';
import Filter from '@/ui/filter';

const Footer = () => {
  const unCompletedCount = () => 0;
  const clearCompleted = () => {};

  return (
    <footer className='grid grid-cols-2 px-6 py-4 text-xs md:grid-cols-3'>
      <div>{unCompletedCount()} items left</div>
      <Filter className='hidden md:block' />
      <div className='text-right'>
        <button
          className='text-card-foreground hover:text-card-hover'
          onClick={() => clearCompleted()}
        >
          Clear Completed
        </button>
      </div>
    </footer>
  );
};

export default Footer;
