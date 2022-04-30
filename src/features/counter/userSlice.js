import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';
// import { useNavigate} from "react-router-dom";



//Initial State
const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    
    login: (state,action) => {

      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
 
    },
  
  },
});
export const { login, logout } = userSlice.actions;
//selectors
export const selectuser = (state) => state.user.user;
export default userSlice.reducer;
