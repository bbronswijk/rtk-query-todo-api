import React from 'react';
import { cn } from '@/utils/cn';
import {
  FilterType,
  selectSelectedFilter,
  setFilter,
} from '@/store/filter.state';
import { useAppDispatch, useAppSelector } from '@/store/store';

interface ComponentProps {
  className: string;
}

const Filter = ({ className }: ComponentProps) => {
  const dispatch = useAppDispatch();
  const selectedFilter = useAppSelector(selectSelectedFilter);
  const filters = Object.values(FilterType);

  return (
    <div className={cn(className, 'space-x-4')}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={cn(
            'text-bold cursor-pointer text-card-foreground hover:text-primary',
            filter === selectedFilter && 'text-primary'
          )}
          onClick={() => dispatch(setFilter(filter))}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
