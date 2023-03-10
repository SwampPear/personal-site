import Head from 'next/head'
import { useEffect } from 'react'

import HomePage from '../src/features/home/HomePage'
import Posts from '../src/features/posts/Posts'
import Works from '../src/features/works/Works'
import Contact from '../src/features/contact/Contact'
import Base from '../src/features/base/Base'
import Copyright from '../src/features/copyright/Copyright'

import { useAppSelector } from '../src/app/hooks'
import { selectNavPage, NavOptions } from '../src/features/nav/navSlice'
import { selectDarkModeInit, selectDarkModeState } from '../src/features/darkmode/darkModeSlice' 


const handlePage = ( page: NavOptions ) => {
  switch( page ) {
    case(NavOptions.home):
      return <HomePage/>
    case(NavOptions.work):
      return <Works/>
    case(NavOptions.posts):
      return <Posts/>
    case(NavOptions.contact):
      return <Contact/>
  }
}

const Home = () => {
  const page = useAppSelector( selectNavPage )

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
        <title>Michael Vaden</title>
        <meta name="description" content="Professional programmer website for the full stack developer Michael Vaden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Base/>
        { handlePage( page ) }
        <Copyright/>
      </main>
    </>
  )
}

export default Home
