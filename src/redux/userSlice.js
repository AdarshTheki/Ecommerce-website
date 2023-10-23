import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.status = true;
      state.userData = payload;
    },
    logOut: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
