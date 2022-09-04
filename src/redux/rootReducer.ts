import { combineReducers } from '@reduxjs/toolkit'
import createWebStorage from 'redux-persist/es/storage/createWebStorage'

const createNoopStorage = () => ({
  getItem(key: string) {
    return Promise.resolve(null)
  },
  setItem(key: string, value: any) {
    return Promise.resolve
  },
  removeItem(key: string) {
    return Promise.resolve()
  },
})

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
}

const rootReducer = combineReducers({})
export { rootPersistConfig, rootReducer }
