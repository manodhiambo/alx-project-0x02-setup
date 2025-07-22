import React from 'react';
import Head from 'next/head';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

export default function About() {
  const handleSmallClick = () => {
    alert('Small button clicked!');
  };

  const handleMediumClick = () => {
    alert('Medium button clicked!');
  };

  const handleLargeClick = () => {
    alert('Large button clicked!');
  };

  return (
    <>
      <Head>
        <title>About - Next.js Project</title>
      </Head>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            About This Project
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn about the technologies, architecture, and design principles behind this modern web application.
          </p>
        </section>

        {/* Project Overview */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Overview
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              This project is a comprehensive demonstration of modern web development practices using Next.js, 
              TypeScript, and Tailwind CSS. It showcases the implementation of reusable components, proper 
              routing, API integration, and responsive design patterns.
            </p>
            <p className="text-gray-600 mb-4">
              The application follows best practices for project structure, component design, code quality, 
              and performance optimization. Each component is built with TypeScript interfaces to ensure 
              type safety and better developer experience.
            </p>
            <p className="text-gray-600">
              The project demonstrates practical skills in building scalable React applications with 
              server-side rendering capabilities and modern CSS frameworks.
            </p>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Frontend Framework</h3>
                <p className="text-gray-600">Next.js 14 with React 18</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Language</h3>
                <p className="text-gray-600">TypeScript 5.2</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Styling</h3>
                <p className="text-gray-600">Tailwind CSS 3.3</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Code Quality</h3>
                <p className="text-gray-600">ESLint with Next.js config</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">API Integration</h3>
                <p className="text-gray-600">JSONPlaceholder REST API</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Development</h3>
                <p className="text-gray-600">Hot reload, TypeScript checking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Button Showcase */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Button Component Showcase
          </h2>
          <p className="text-gray-600 mb-6">
            Demonstration of our reusable Button component with different sizes and shapes:
          </p>
          
          <div className="space-y-6">
            {/* Size Variations */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Size Variations</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="small" shape="rounded-md" onClick={handleSmallClick}>
                  Small Button
                </Button>
                <Button size="medium" shape="rounded-md" onClick={handleMediumClick}>
                  Medium Button
                </Button>
                <Button size="large" shape="rounded-md" onClick={handleLargeClick}>
                  Large Button
                </Button>
              </div>
            </div>

            {/* Shape Variations */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Shape Variations</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="medium" shape="rounded-sm" onClick={() => alert('Sharp corners!')}>
                  Rounded SM
                </Button>
                <Button size="medium" shape="rounded-md" onClick={() => alert('Medium corners!')}>
                  Rounded MD
                </Button>
                <Button size="medium" shape="rounded-full" onClick={() => alert('Fully rounded!')}>
                  Rounded Full
                </Button>
              </div>
            </div>

            {/* Combined Variations */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Combined Variations</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="small" shape="rounded-full" onClick={() => alert('Small + Full!')}>
                  Small Pill
                </Button>
                <Button size="large" shape="rounded-sm" onClick={() => alert('Large + Sharp!')}>
                  Large Sharp
                </Button>
                <Button 
                  size="medium" 
                  shape="rounded-md" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => alert('Custom color!')}
                >
                  Custom Color
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Server-side rendering (SSR)',
              'Static site generation (SSG)',
              'TypeScript type safety',
              'Responsive design system',
              'Component-based architecture',
              'API route handling',
              'Automatic code splitting',
              'SEO optimization',
              'Performance optimization',
              'Modern CSS with Tailwind',
              'Form handling and validation',
              'Modal and overlay components'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-primary-600">✓</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Explore?
          </h2>
          <p className="text-gray-600 mb-6">
            Check out the other pages to see more components and functionality in action.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="large" onClick={() => window.location.href = '/posts'}>
              View Posts
            </Button>
            <Button 
              size="large" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => window.location.href = '/users'}
            >
              View Users
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
