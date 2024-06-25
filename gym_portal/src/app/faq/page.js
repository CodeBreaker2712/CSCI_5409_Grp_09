// pages/faq.js

import Head from 'next/head';
import { ChevronRightIcon } from '@heroicons/react/outline';

export default function Faq() {
  return (
    <div>
      <Head>
        <title>FAQ - Gym Portal</title>
      </Head>
      <div className="bg-gray-100 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Question 1?</h2>
              <p className="text-gray-700 mb-4">Answer 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Question 2?</h2>
              <p className="text-gray-700 mb-4">Answer 2.</p>
            </div>
            {/* Add more questions and answers as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
