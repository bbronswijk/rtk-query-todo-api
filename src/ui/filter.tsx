import React from 'react';
import { cn } from '@/utils/cn';
import { FilterType } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedFilter } from '@/store/selectors';
import { setSelectedFilter } from '@/store/actions';

interface ComponentProps {
  className: string;
}

const Filter = ({ className }: ComponentProps) => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectSelectedFilter);

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
          onClick={() => dispatch(setSelectedFilter(filter))}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
