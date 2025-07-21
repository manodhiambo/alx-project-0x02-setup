import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';

const IndexPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Next.js Project - Welcome</title>
        <meta name="description" content="Welcome to our Next.js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Our Next.js Project
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive introduction to Next.js with TypeScript and Tailwind CSS
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Project Features
            </h2>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Next.js with TypeScript support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Tailwind CSS for styling
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Reusable components
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                API integration
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Responsive design
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
