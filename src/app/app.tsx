import '../shared/styles/_boilerplate.scss'
import { Provider } from 'react-redux'

import { Router } from '@/app/app-router.tsx'
import { AppStore } from '@/app/app-store.ts'

function App() {
  return (
    <Provider store={AppStore}>
      <Router />
    </Provider>
  )
}

export default App
