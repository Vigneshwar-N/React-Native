const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  loading: true,
  data: [],
  error: "",
};
//generate pending fullFilled and rejected action types
const fetchUser = createAsyncThunk("user/fetch", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        (state.loading = false),
          (state.data = action.payload),
          (state.error = "");
      }),
      builder.addCase(fetchUser.rejected, (state, action) => {
        (state.loading = false),
          (state.data = []),
          (state.error = action.error.message);
      });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUser = fetchUser;
