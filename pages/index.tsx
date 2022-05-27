import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import meme1 from '../public/meme1.png'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-4">
      <Head>
        <title>Toan's Homepage</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>



      <main className="flex w-full flex-1 flex-col items-center justify-start p-4">
        <h1 className="my-4 text-4xl font-bold">
          👋 Hi I'm Toan!
        </h1>
        <p className="mb-8 text-center">
          I'm a Software Engineer. An introvert. <br />
          Self-proclaimed highly agreeable. <br />
          Love automating and perfecting my crafts.
        </p>

        <div className="w-full lg:w-2/5">
          <h3>This is also me <em>(read from right to left):</em> </h3>

          <div className="mt-2 mb-8">
            <Image src={meme1} />
          </div>
        </div>



        <div className="flex w-full lg:w-2/5 flex-col items-center">
          <h3 className="text-lg w-full">Here are some of my stuffs:</h3>
          <Link href="https://playground.toanphan.dev/wordle">
            <a className="my-2 w-full rounded-lg border px-4 py-2 text-left hover:text-green-600 focus:text-green600">
              <h3 className="mb-2 text-xl font-bold">Wordle Solver &rarr;</h3>
              <p>A statistical solver for the trending word game Wordle</p>
            </a>
          </Link>
          <Link href="/memes">
            <a className="my-2 w-full rounded-lg border px-4 py-2 text-left hover:text-green-600 focus:text-green600">
              <h3 className="mb-2 text-xl font-bold">Memes &rarr;</h3>
              <p>My all-time favourite memes.</p>
            </a>
          </Link>
        </div>

      </main>

    </div >
  )
}

export default Home
