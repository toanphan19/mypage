import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Toan's Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-start px-40 pt-10 text-center">
        <h1 className="mb-8 text-4xl font-medium">
          Welcome to Toan's Home Page
        </h1>

        <div className="flex w-full flex-col items-center">
          <Link href="/memes">
            <a className="my-2 w-2/3 rounded-lg border px-6 py-2 text-left hover:text-green-600 focus:text-green600">
              <h3 className="mb-2 text-xl font-medium">Memes &rarr;</h3>
              <p>My all-time favourite memes.</p>
            </a>
          </Link>
          <Link href="/memes">
            <a className="my-2 w-2/3 rounded-lg border px-6 py-2 text-left hover:text-green-600 focus:text-green600">
              <h3 className="mb-2 text-xl font-medium">Wordle Solver &rarr;</h3>
              <p>A solver for the trending word game Wordle</p>
            </a>
          </Link>
        </div>

      </main>

    </div >
  )
}

export default Home
