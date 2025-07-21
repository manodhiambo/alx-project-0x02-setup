import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import PostModal from '../components/common/PostModal';

interface Post {
  id: number;
  title: string;
  content: string;
}

const HomePage: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Welcome to our Dashboard",
      content: "This is the main dashboard where you can view and manage your content. Explore the different features available to you."
    },
    {
      id: 2,
      title: "Getting Started",
      content: "Learn how to use this application effectively. Check out our tutorials and documentation to make the most of your experience."
    }
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      content
    };
    setPosts([newPost, ...posts]);
  };

  const cardData = [
    {
      title: "Project Overview",
      content: "This Next.js project demonstrates modern web development practices with TypeScript, Tailwind CSS, and component-based architecture."
    },
    {
      title: "Features",
      content: "Includes reusable components, routing, API integration, responsive design, and interactive elements like modals and forms."
    },
    {
      title: "Technologies",
      content: "Built with Next.js 13+, TypeScript for type safety, Tailwind CSS for styling, and React hooks for state management."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Dashboard - Next.js Project</title>
        <meta name="description" content="Main dashboard for the Next.js project" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Manage your content and explore project features</p>
            </div>
            <Button
              size="medium"
              shape="rounded-md"
              onClick={() => setIsModalOpen(true)}
            >
              Add New Post
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>

          {/* User Posts */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Posts</h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-medium text-gray-800 mb-1">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </div>
  );
};

export default HomePage;
