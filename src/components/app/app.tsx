import React, { FC, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { useGate } from 'effector-react'
import { AppGate, useInit } from '../../models/app'
import * as Pages from '../../pages'

const App: FC = () => {
  const [showLoader, setShowLoader] = useState(true)
  const init = useInit()

  useGate(AppGate)
  useEffect(() => {
    if (init) {
      setTimeout(() => setShowLoader(false), 5000)
    }
  }, [init])
  return (
    <div className='grid-rows-[auto,1fr,auto] grid min-h-screen'>
      <header className='py-4 text-center text-white text-xl bg-blue-600'>
        This is header
      </header>
      <main>
        {showLoader ? (
          <div className='flex items-center justify-center h-full bg-yellow-500'>
            Loading.....
          </div>
        ) : (
          <Routes>
            <Route path='/' element={<Pages.Home />} />
            <Route path='profile' element={<Pages.Profile />} />
            <Route path='login' element={<Pages.Login />} />
          </Routes>
        )}
      </main>
      <footer className='py-4 text-center text-white text-xl bg-green-500'>
        Footer
      </footer>
    </div>
  )
}

export { App }
