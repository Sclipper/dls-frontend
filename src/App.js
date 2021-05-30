import './App.css'

import { QueryClient, QueryClientProvider } from 'react-query'

import Dashboard from './Dashboard'

function App() {
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </div>
  )
}

export default App
