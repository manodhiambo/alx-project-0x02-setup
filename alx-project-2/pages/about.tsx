import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const AboutPage: NextPage = () => {
  const handleButtonClick = (buttonType: string) => {
    alert(`You clicked the ${buttonType} button!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About - Next.js Project</title>
        <meta name="description" content="Learn more about our Next.js project" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About This Project
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This is a comprehensive Next.js application built as a learning project to demonstrate 
              modern web development practices. The project showcases the integration of Next.js with 
              TypeScript and Tailwind CSS, creating a robust foundation for scalable web applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-gray-800">TypeScript Integration:</strong>
                  <p className="text-gray-600 text-sm">Full type safety and enhanced developer experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-gray-800">Tailwind CSS:</strong>
                  <p className="text-gray-600 text-sm">Utility-first CSS framework for rapid styling</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-gray-800">Component Architecture:</strong>
                  <p className="text-gray-600 text-sm">Reusable and modular component design</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-gray-800">API Integration:</strong>
                  <p className="text-gray-600 text-sm">External API data fetching and display</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Learning Objectives
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Through this project, developers learn to set up and configure a Next.js application, 
              implement routing, create reusable components, manage state, integrate with external APIs, 
              and follow modern web development best practices. The project serves as a foundation 
              for building more complex applications.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Button Component Demo
            </h2>
            <p className="text-gray-600 mb-6">
              Here are examples of our reusable Button component with different sizes and shapes:
            </p>

            <div className="space-y-6">
              {/* Small Buttons */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Small Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="small"
                    shape="rounded-sm"
                    onClick={() => handleButtonClick('small rounded-sm')}
                  >
                    Small Sharp
                  </Button>
                  <Button
                    size="small"
                    shape="rounded-md"
                    onClick={() => handleButtonClick('small rounded-md')}
                  >
                    Small Medium
                  </Button>
                  <Button
                    size="small"
                    shape="rounded-full"
                    onClick={() => handleButtonClick('small rounded-full')}
                  >
                    Small Pill
                  </Button>
                </div>
              </div>

              {/* Medium Buttons */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Medium Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="medium"
                    shape="rounded-sm"
                    onClick={() => handleButtonClick('medium rounded-sm')}
                  >
                    Medium Sharp
                  </Button>
                  <Button
                    size="medium"
                    shape="rounded-md"
                    onClick={() => handleButtonClick('medium rounded-md')}
                  >
                    Medium Rounded
                  </Button>
                  <Button
                    size="medium"
                    shape="rounded-full"
                    onClick={() => handleButtonClick('medium rounded-full')}
                  >
                    Medium Pill
                  </Button>
                </div>
              </div>

              {/* Large Buttons */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Large Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="large"
                    shape="rounded-sm"
                    onClick={() => handleButtonClick('large rounded-sm')}
                  >
                    Large Sharp
                  </Button>
                  <Button
                    size="large"
                    shape="rounded-md"
                    onClick={() => handleButtonClick('large rounded-md')}
                  >
                    Large Rounded
                  </Button>
                  <Button
                    size="large"
                    shape="rounded-full"
                    onClick={() => handleButtonClick('large rounded-full')}
                  >
                    Large Pill
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
