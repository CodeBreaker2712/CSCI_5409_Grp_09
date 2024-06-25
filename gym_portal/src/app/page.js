import Head from 'next/head';
import Layout from './layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Gym Portal</title>
        <meta name="description" content="Your ultimate gym portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Welcome to Gym Portal</h1>
        <p>Your ultimate solution for finding and comparing gyms.</p>
      </div>
    </Layout>
  );
}
