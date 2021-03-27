import React, { FC } from 'react'
import { Todos } from '../todos'

const App: FC = () => {
  return (
    <div className='grid-rows-[auto,1fr,auto] grid min-h-screen'>
      <header className='py-4 text-center text-white text-xl bg-blue-600'>
        This is header
      </header>
      <main>
        <div className='bg-pattern flex items-center justify-center h-full'>
          <Todos />
        </div>
      </main>
      <footer className='py-4 text-center text-white text-xl bg-green-500'>
        Footer
      </footer>
    </div>
  )
}

export { App }
