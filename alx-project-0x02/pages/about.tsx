import Head from 'next/head';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - ALX Project</title>
        <meta name="description" content="About page with button components" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">About Page</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-700 mb-6">
              This page demonstrates different button sizes and shapes using our reusable Button component.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Different Sizes:</h3>
                <div className="flex flex-wrap gap-4">
                  <Button size="small">Small Button</Button>
                  <Button size="medium">Medium Button</Button>
                  <Button size="large">Large Button</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Different Shapes:</h3>
                <div className="flex flex-wrap gap-4">
                  <Button shape="rounded-sm">Sharp Corners</Button>
                  <Button shape="rounded-md">Rounded Corners</Button>
                  <Button shape="rounded-full">Fully Rounded</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Combined Styles:</h3>
                <div className="flex flex-wrap gap-4">
                  <Button size="small" shape="rounded-full">Small Round</Button>
                  <Button size="large" shape="rounded-sm">Large Sharp</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
