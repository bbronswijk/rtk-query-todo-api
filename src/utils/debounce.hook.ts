import { useEffect, useState } from 'react';

const DEBOUNCE_TIME = 600;

export function useDebounce<T>(value: T, delay = DEBOUNCE_TIME): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
