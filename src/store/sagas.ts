import { Todo } from '@bbronswijk/kotlin-todo-api-client';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  deleteTodoApi,
  deleteTodosApi,
  getTodosApi,
  patchTodoApi,
  postTodoApi,
  toggleTodoApi,
} from '@/api/api';
import {
  ActionType,
  clearCompleted,
  createTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
} from '@/store/actions';

function* fetchTodosAction() {
  const todos: Todo[] = yield call(getTodosApi);
  yield put({
    type: ActionType.FETCH_SUCCESS,
    payload: todos.slice(0, 10),
  });
}

function* createTodoAction({ payload }: ReturnType<typeof createTodo>) {
  const todo: Todo = yield call(postTodoApi, payload);
  yield put({
    type: ActionType.CREATE_SUCCESS,
    payload: todo,
  });
}

function* updateTodoAction({ payload }: ReturnType<typeof updateTodo>) {
  const todo: Todo = yield call(patchTodoApi, payload);
  yield put({
    type: ActionType.UPDATE_SUCCESS,
    payload: todo,
  });
}

function* deleteTodoAction({ payload }: ReturnType<typeof deleteTodo>) {
  const todo: string = yield call(deleteTodoApi, payload.id as string); // TODO figure out in Kotlin how not to have the ID as optional.
  yield put({
    type: ActionType.DELETE_SUCCESS,
    payload: todo,
  });
}

function* toggleTodoAction({ payload }: ReturnType<typeof toggleTodo>) {
  const todo: Todo = yield call(toggleTodoApi, payload);
  yield put({
    type: ActionType.TOGGLE_SUCCESS,
    payload: todo,
  });
}

function* clearCompletedAction({ payload }: ReturnType<typeof clearCompleted>) {
  const todo: Todo = yield call(deleteTodosApi, payload);
  yield put({
    type: ActionType.CLEAR_COMPLETED_SUCCESS,
    payload: todo,
  });
}

export function* rootSaga() {
  yield takeEvery(ActionType.FETCH, fetchTodosAction);
  yield takeEvery(ActionType.CREATE, createTodoAction);
  yield takeEvery(ActionType.UPDATE, updateTodoAction);
  yield takeEvery(ActionType.DELETE, deleteTodoAction);
  yield takeEvery(ActionType.TOGGLE, toggleTodoAction);
  yield takeEvery(ActionType.CLEAR_COMPLETED, clearCompletedAction);
}
