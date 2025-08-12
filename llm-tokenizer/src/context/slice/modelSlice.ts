import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ModelState {
  selectedModel: string;
}

const initialState: ModelState = {
  selectedModel: 'o200k_base',
};

const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setModel: (state, action: PayloadAction<string>) => {
      state.selectedModel = action.payload;
    },
  },
});

export const { setModel } = modelSlice.actions;
export default modelSlice.reducer;
