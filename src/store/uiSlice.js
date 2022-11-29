const { createSlice } = require("@reduxjs/toolkit");

const initialUIState = {};

const uiState = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    showForm() {},
  },
});

const uiActions = uiState.actions;
const uiReducers = uiState.reducer;

export { uiActions, uiReducers };
