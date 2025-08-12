import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Tiktoken } from 'js-tiktoken/lite';
import o200k_base from 'js-tiktoken/ranks/o200k_base';

interface TokenState {
  text: string;
  tokens: number[];
  tokenCount: number;
}

const initialState: TokenState = {
  text: '',
  tokens: [],
  tokenCount: 0,
};

const enc = new Tiktoken(o200k_base);

const tokenSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
      state.tokens = enc.encode(action.payload || '');
      state.tokenCount = state.tokens.length;
    },
  },
});

export const { setText } = tokenSlice.actions;
export default tokenSlice.reducer;
