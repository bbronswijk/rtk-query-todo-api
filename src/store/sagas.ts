import {
  DeleteManyTodosRequest,
  Todo,
} from '@bbronswijk/kotlin-todo-api-client';
import { call, put } from 'redux-saga/effects';
import {
  deleteTodoApi,
  deleteTodosApi,
  getTodosApi,
  patchTodoApi,
  postTodoApi,
  toggleTodoApi,
} from '@/api/api';
import {
  clearCompletedAction,
  clearCompletedSuccessAction,
  createTodoAction,
  createTodoSuccessAction,
  deleteTodoAction,
  deleteTodoSuccessAction,
  fetchTodosSuccessAction,
  toggleTodoAction,
  toggleTodoSuccessAction,
  updateTodoAction,
  updateTodoSuccessAction,
} from '@/store/actions';

export function* fetchTodosSaga() {
  const todos: Todo[] = yield call(getTodosApi);
  yield put(fetchTodosSuccessAction(todos));
}

export function* createTodoSaga({
  payload,
}: ReturnType<typeof createTodoAction>) {
  const todo: Todo = yield call(postTodoApi, payload);
  yield put(createTodoSuccessAction(todo));
}

export function* updateTodoSaga({
  payload,
}: ReturnType<typeof updateTodoAction>) {
  const todo: Todo = yield call(patchTodoApi, payload);
  yield put(updateTodoSuccessAction(todo));
}

export function* deleteTodoSaga({
  payload,
}: ReturnType<typeof deleteTodoAction>) {
  const todoId: string = yield call(deleteTodoApi, payload.id);
  yield put(deleteTodoSuccessAction(todoId));
}

export function* toggleTodoSaga({
  payload,
}: ReturnType<typeof toggleTodoAction>) {
  const todo: Todo = yield call(toggleTodoApi, payload);
  yield put(toggleTodoSuccessAction(todo));
}

export function* clearCompletedSaga({
  payload,
}: ReturnType<typeof clearCompletedAction>) {
  const deletedIds: DeleteManyTodosRequest['deleteIds'] = yield call(
    deleteTodosApi,
    payload
  );
  yield put(clearCompletedSuccessAction(deletedIds));
}
