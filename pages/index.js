import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => (
  <div>
    <h1>Welcome to Next.js!</h1>
    <Link href="/data">
      <a>
        Data page
      </a>
    </Link>
  </div>
)

export default Home
