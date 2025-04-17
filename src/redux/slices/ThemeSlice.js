import { createSlice } from "@reduxjs/toolkit";

 const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleTheme: (state) => {
        console.log("Slice ", state.isDarkMode);
      state.isDarkMode = !state.isDarkMode;
    },
  }, 
});
export const { toggleTheme } = ThemeSlice.actions;    
export default ThemeSlice.reducer;                           