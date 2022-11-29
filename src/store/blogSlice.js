const { createSlice } = require("@reduxjs/toolkit");

const initialBlogState = { blogList: [], blogDetails: {} };

const blogState = createSlice({
  name: "blog",
  initialState: initialBlogState,
  reducers: {
    setBlogList(state, action) {
      state.blogList = action.payload.blogList;
    },
    setBlogDetails(state, action) {
      state.blogDetails = action.payload.blogDetails;
    },
  },
});

const blogActions = blogState.actions;
const blogReducers = blogState.reducer;
export { blogActions, blogReducers };
