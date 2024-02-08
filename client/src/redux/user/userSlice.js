import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentState: null,
  error: null,
  loading: false
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SigninStart: (state) => {
      state.loading = true
      state.error = null
    },
    SigninSuccess: (state, action) => {
      state.currentState = action.payload
      state.loading = false
    },
    SigninFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { SigninStart, SigninSuccess, SigninFail } = userSlice.actions

export default userSlice.reducer
