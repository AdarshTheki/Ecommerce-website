import { createSlice } from "@reduxjs/toolkit";

// Get the user LogIn Data in localStorage
const getUserFromLocalStorage = () => {
  const userJSON = localStorage.getItem("user");
  return userJSON ? JSON.parse(userJSON) : null;
};

const userSlice = createSlice({
  name: "user",
  initialState: { user: getUserFromLocalStorage(), isAuthentication: !!getUserFromLocalStorage() },
  reducers: {
    logIn(state, action) {
      state.user = action.payload;
      state.isAuthentication = true;
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logOut(state) {
      state.user = null;
      state.isAuthentication = false;
      localStorage.removeItem('user')
    },
  },
});
export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
