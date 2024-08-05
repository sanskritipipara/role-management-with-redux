import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  role: string;
}

const initialState: UserState = {
  name: '',
  role: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserRole(state, action: PayloadAction<{ name: string, role: string }>) {
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
  },
});

export const { setUserRole } = userSlice.actions;

export default userSlice.reducer;
