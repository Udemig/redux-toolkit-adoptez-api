import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  token: localStorage.getItem('token'),
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem('token', action.payload)
      state.token = action.payload
    },

    removeToken: (state) => {
      localStorage.removeItem('token')
      state.token = null
    },
  },
})

export const {setToken, removeToken} = authSlice.actions

export default authSlice.reducer

