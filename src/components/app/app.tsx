import React, { FC } from 'react'
import { Button } from '../ui/button'

const App: FC = () => {
  return (
    <div className='grid-rows-[auto,1fr,auto] grid min-h-screen'>
      <header className='py-4 text-center text-white text-xl bg-blue-600'>
        This is header
      </header>
      <main>
        <div className='flex items-center justify-center h-full bg-red-100'>
          <Button>Hello World</Button>
        </div>
      </main>
      <footer className='py-4 text-center text-white text-xl bg-green-500'>
        Footer
      </footer>
    </div>
  )
}

export { App }
