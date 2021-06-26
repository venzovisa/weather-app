import { configureStore } from '@reduxjs/toolkit'
import { searchReduce } from '../components/searchSlice'

export default configureStore({
  reducer: {
    search: searchReduce
  }
})