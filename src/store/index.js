const { configureStore } = require("@reduxjs/toolkit");
const { blogReducers } = require("./blogSlice");
const { uiReducers } = require("./uiSlice");

const store = configureStore({
  reducer: { blog: blogReducers, ui: uiReducers },
});

export { store };
