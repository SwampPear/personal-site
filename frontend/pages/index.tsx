import Head from 'next/head'

import HomePage from '../src/features/home/HomePage'
import Posts from '../src/features/posts/Posts'
import Works from '../src/features/works/Works'
import Contact from '../src/features/contact/Contact'
import Base from '../src/features/base/Base'

import { useAppSelector } from '../src/app/hooks'
import { selectNavPage, NavOptions } from '../src/features/nav/navSlice'


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

  return (
    <>
      <Head>
        <title>Michael Vaden</title>
        <meta name="description" content="Generated by create nex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Base/>
        { handlePage( page ) }
      </main>
    </>
  )
}

export default Home
