import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@/shared/api'

export const AppStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppDispatch = typeof AppStore.dispatch
export type RootState = ReturnType<typeof AppStore.getState>
