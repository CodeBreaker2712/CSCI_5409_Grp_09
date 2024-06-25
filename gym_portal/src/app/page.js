// pages/index.js

import Head from 'next/head';
import Link from 'next/link';
import { SearchIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gym Portal</title>
      </Head>
      <div className="bg-gray-100 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Welcome to Gym Portal</h1>
          <p className="text-xl mb-12">Find the perfect gym for your fitness journey!</p>
          <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-4 mb-12">
            <input type="text" placeholder="Search for gyms..." className="w-full bg-transparent border-none focus:outline-none" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline">
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center">
            <Link href="/faq" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mr-4">
              FAQ
            </Link>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
