import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 0x02 - Welcome</title>
        <meta name="description" content="Next.js Project Setup and Basics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to ALX Project 0x02
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Next.js Project Setup and Basics
            </p>
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <p className="text-gray-700">
                This project demonstrates the fundamentals of Next.js, TypeScript, and Tailwind CSS. 
                Navigate through the different pages to explore the various components and features implemented.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
