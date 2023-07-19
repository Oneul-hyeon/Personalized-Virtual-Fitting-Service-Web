import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlices'
import clothReducer from './features/clothSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    cloth: clothReducer,
  },
})

export default store
