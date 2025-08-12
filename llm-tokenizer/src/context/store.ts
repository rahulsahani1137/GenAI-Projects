import { configureStore } from '@reduxjs/toolkit';
import modelReducer from '../context/slice/modelSlice'
import tokenReducer from '../context/slice/tokenSlice'

export const store = configureStore({
  reducer: {
    model: modelReducer,
    tokens: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
