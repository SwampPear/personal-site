import Head from 'next/head'

import JustForFunGame from '../src/features/justForFunGame/justForFunGame'
import JustForFunOverlay from '@/src/features/justForFunOverlay/justForFunOverlay'

const JustForFunPage = () => {
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
        <JustForFunGame/>
        <JustForFunOverlay/>
      </main>
    </>
  )
}

export default JustForFunPage