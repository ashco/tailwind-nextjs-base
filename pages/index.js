import Head from 'next/head'

import Layout from '../components/Layout'

const IndexPage = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <h1 className="text-5xl font-bold text-purple-500">Hello world!</h1>
    </Layout>
  </div>

)

export default IndexPage