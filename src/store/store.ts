import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from '@/store/api';
import { filterSlice } from '@/store/filter.state';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
