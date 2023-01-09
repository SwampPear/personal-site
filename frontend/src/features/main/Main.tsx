import React from 'react'

import Home from '../../features/home/Home'
import Posts from '../../features/posts/Posts'
import Works from '../../features/works/Works'

import { useAppSelector } from '../../app/hooks'

import { selectNavPage, NavOptions } from '../../features/nav/navSlice'
import Contact from '../../features/contact/Contact'


const handlePage = ( page: NavOptions ) => {
  switch( page ) {
    case(NavOptions.home):
      return <Home/>
    case(NavOptions.work):
      return <Works/>
    case(NavOptions.posts):
      return <Posts/>
    case(NavOptions.contact):
      return <Contact/>
  }
}

const Main = () => {
  const page = useAppSelector( selectNavPage )

  return handlePage( page )
}

export default Main