declare module 'redux-actions' {
  import { Reducer } from 'redux';

  export function handleActions<
    TState,
    TActions extends { type: string; payload?: unknown },
  >(
    reducers: {
      [typeof TActions['type']]: (
        state: TState,
        payload: TActions extends { type: K; payload: infer U }
          ? { type: K; payload: U }
          : never
      ) => TState;
    },

    initialState: TState
  ): Reducer<TState>;
}
