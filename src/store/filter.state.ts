import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

export enum FilterType {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

export interface FilterState {
  selectedFilter: FilterType;
}

const initialState: FilterState = {
  selectedFilter: FilterType.All,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const selectSelectedFilter = (state: RootState): FilterType =>
  state.filter.selectedFilter;

export const { setFilter } = filterSlice.actions;
