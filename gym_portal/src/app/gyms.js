import Head from 'next/head';
import Layout from './layout';

export default function Gyms() {
  return (
    <Layout>
      <Head>
        <title>Gym Listings</title>
        <meta name="description" content="List of gyms" />
      </Head>
      <div>
        <h1>Gym Listings</h1>
        <p>Find and compare gyms near you.</p>
      </div>
    </Layout>
  );
}
