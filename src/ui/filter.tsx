import React, { useState } from 'react';
import { cn } from '@/utils/cn';

export enum FilterType {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

interface ComponentProps {
  className: string;
}

const Filter = ({ className }: ComponentProps) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(
    FilterType.All
  );
  const filters = Object.values(FilterType);

  return (
    <div className={cn(className, 'space-x-4')}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={cn(
            'text-card-foreground hover:text-card-hover text-bold',
            filter === selectedFilter && 'text-primary'
          )}
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
