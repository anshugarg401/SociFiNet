import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  metaMaskAddress: null, // Add MetaMask address field
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action) => {
      // Save user to localStorage whenever it's updated
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    signInMetaMask: (state, action) => {
      state.metaMaskAddress = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.metaMaskAddress = null; // Clear MetaMask address on logout
    },
  },
});

export const { signInUser, signInMetaMask, logoutUser } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;
export const selectMetaMaskAddress = (state) => state.user.metaMaskAddress;

export default userSlice.reducer;
