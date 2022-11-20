import {configureStore} from '@reduxjs/toolkit'

import authReducer from './authSlice'
import categoryReducer from './categorySlice'
import appDataReducer from './appDataSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    appData: appDataReducer,
  },
})

