import Head from 'next/head'
import { useEffect } from 'react'

import Base from '../../src/features/base/Base'
import Blog from '../../src/features/blog/Blog'

import { useAppSelector } from '../../src/app/hooks'
import { selectDarkModeInit, selectDarkModeState } from '../../src/features/darkmode/darkModeSlice' 

import { gql } from "@apollo/client"
import { client } from '../_app'
import Copyright from '../../src/features/copyright/Copyright'


const allPosts = () => {
  return gql`
    query {
      allPosts {
        id
        type
        title
        readingTime
        content
      }
    }
  `
}

const postByTitle = (title: string) => {
  return gql`
    query {
      postByTitle(title: "${title}") {
        id
        type
        title
        readingTime
        content
      }
    }
  `
}

export async function getAllPosts() {
  return client
    .query({
      query: allPosts(),
    })
    .then((result) => result.data.allPosts)
    .catch((error) => console.log(JSON.stringify(error, null, 2)))
    
}

export async function getPostByTitle(title: string) {
  return client
    .query({
      query: postByTitle(title),
    })
    .then((result) => {
      return result.data.postByTitle
    })
    .catch((error) => console.log(JSON.stringify(error, null, 2)))
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  const paths = posts.map((post: any) => ({
    params: { title: post.title },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }: any) {
  const post = await getPostByTitle(params.title)

  return { props: { post } }
}


const PostsPage = ({post}: any) => {
  // darkmode
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
        <title>Michael Vaden - {post.title}</title>
        <meta name="description" content={`Michael Vaden blog website for the post ${post.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Base/>
        <Blog
          id={post.id}
          type={post.type}
          title={post.title}
          readingTime={post.readingTime}
          content={post.content}
        />
        <Copyright/>
      </main>
    </>
  )
}

export default PostsPage