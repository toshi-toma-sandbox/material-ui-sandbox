import Head from 'next/head'
import { Button } from '@material-ui/core'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Button variant="contained" color="primary">Hello World</Button>
      </main>

      <footer>
      </footer>
    </div>
  )
}
