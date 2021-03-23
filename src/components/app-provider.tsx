import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

const AppProvider: FC = ({ children }) => {
  return (
    <HelmetProvider>
      <Router>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Router>
    </HelmetProvider>
  )
}

export { AppProvider }
