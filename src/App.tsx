import React, { FC, useState } from 'react'
import { Button } from './components/ui/button'

const App: FC = () => {
  const [is, set] = useState(false)

  return (
    <div className='min-h-screen grid grid-rows-[auto,1fr,auto]'>
      <button onClick={() => set(v => !v)}>Toggle</button>
      <header className='bg-blue-500'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        illo facere, nihil quia dolorem hic exercitationem consequatur
        voluptates? Qui culpa aliquid corporis similique odio quas harum quae
        quod non eum?
      </header>
      <main>
        <div className='flex place-items-center h-full'>
          <div className='h-[500px] w-[500px] bg-red-600 mx-auto flex items-center justify-center'>
            <h1 className='block text-white text-center text-[50px] bg-blue-500 p-20'>
              ТЫ ПИДОР!sd
            </h1>
            <Button
              variant='green'
              size='small'
              active={is}
              onClick={() => alert('Clicked!')}
            >
              Hello
            </Button>
          </div>
        </div>
      </main>
      <footer className='bg-green-400'>My footer</footer>
    </div>
  )
}

export { App }
