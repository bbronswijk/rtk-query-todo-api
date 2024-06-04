import { cn } from '@/utils/cn';
import React from 'react';

interface ComponentProps {
  className?: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ className = '', checked, onChange }: ComponentProps) => (
  <div
    className={cn(
      className,
      'hover:from-check-start hover:to-check-end flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br duration-200',
      checked ? 'from-check-start to-check-end' : 'bg-border'
    )}
    onClick={() => onChange(!checked)}
  >
    <span
      className={cn(
        'border-border absolute flex h-6 w-6 items-center justify-center rounded-full border hover:h-5 hover:w-5 hover:border-none',
        !checked && 'bg-card'
      )}
    >
      {checked && (
        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='2'
            d='M1 4.304L3.696 7l6-6'
          />
        </svg>
      )}
    </span>
  </div>
);

export default Checkbox;
