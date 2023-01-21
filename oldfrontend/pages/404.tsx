import Head from 'next/head'
import { useEffect } from 'react'

import ErrorPage from '../src/features/errorPage/ErrorPage'

import { useAppSelector } from '../src/app/hooks'
import { selectDarkModeInit, selectDarkModeState } from '../src/features/darkmode/darkModeSlice' 


const Error404Page = () => {
  const darkmode = useAppSelector( selectDarkModeState )
  const darkmodeInit = useAppSelector( selectDarkModeInit )

  useEffect( () => { 
    if (darkmodeInit) {
      if (darkmode) {
        document.querySelector( 'body' )?.classList.remove( 'bodyFromDark' ) 
        document.querySelector( 'body' )?.classList.add( 'bodyToDark' ) 
      } else {
        document.querySelector( 'body' )?.classList.remove( 'bodyToDark' ) 
        document.querySelector( 'body' )?.classList.add( 'bodyFromDark' ) 
      }
    }
  }, [darkmode, darkmodeInit])

  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="404 error - Not Found Error" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ErrorPage
          error='404'
          text={`I think you've gotten lost! Let's get you back home.`}
        />
      </main>
    </>
  )
}

export default Error404Page
