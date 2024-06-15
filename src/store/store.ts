import { Todo } from '@bbronswijk/kotlin-todo-api-client';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer } from '@/store/reducer';
import { rootSaga } from '@/store/sagas';

export enum FilterType {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

export interface TodoState {
  todos: Todo[];
  selectedFilter: FilterType;
}

export const initialState: TodoState = {
  todos: [],
  selectedFilter: FilterType.All,
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
