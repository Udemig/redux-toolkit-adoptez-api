import {createSlice} from '@reduxjs/toolkit'

const initialState = null

export const appDataSlice = createSlice({
  name: 'appDataSlice',
  initialState,
  reducers: {
    setAppData: (state, action) => {
      return action.payload
    },
    removeAppData: (state, action) => {
      return null
    }
  },
})

export const {setAppData, removeAppData} = appDataSlice.actions

export default appDataSlice.reducer

