import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

interface UserPost {
  id: string;
  title: string;
  content: string;
}

export default function HomePage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  const handleAddPost = (title: string, content: string) => {
    const newPost: UserPost = {
      id: Date.now().toString(),
      title,
      content,
    };
    setUserPosts([newPost, ...userPosts]);
  };

  return (
    <>
      <Head>
        <title>Home - Next.js Project</title>
      </Head>

      <div className="space-y-8">
        {/* Hero Section */}
        <section className="text-center bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome Home
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Explore the power of modern web development with our Next.js, TypeScript, and Tailwind CSS project. 
            Create, manage, and share your content with beautiful, responsive components.
          </p>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => setIsModalOpen(true)} size="large">
              Create Post
            </Button>
            <Button 
              onClick={() => router.push('/posts')} 
              size="large"
              className="bg-gray-600 hover:bg-gray-700"
            >
              View All Posts
            </Button>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{userPosts.length}</div>
            <div className="text-gray-600">Your Posts</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600">API Posts</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">10</div>
            <div className="text-gray-600">Users</div>
          </div>
        </section>

        {/* User Posts */}
        {userPosts.length > 0 && (
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Your Posts ({userPosts.length})
              </h2>
              <Button onClick={() => setIsModalOpen(true)}>
                Add Another
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPosts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  content={post.content}
                />
              ))}
            </div>
          </section>
        )}

        {/* Feature Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Project Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="🚀 Next.js Framework"
              content="Built with Next.js 14 for optimal performance, featuring server-side rendering, static site generation, and automatic code splitting for faster load times."
            />
            <Card
              title="🔷 TypeScript Support"
              content="Full TypeScript integration provides type safety, better developer experience, and improved code maintainability with compile-time error checking."
            />
            <Card
              title="🎨 Tailwind CSS"
              content="Responsive design system built with Tailwind CSS utility classes, ensuring consistent styling and mobile-first responsive layouts."
            />
            <Card
              title="🧩 Reusable Components"
              content="Modular component architecture with props interfaces, making components reusable across different pages and easy to maintain."
            />
            <Card
              title="🔗 API Integration"
              content="Seamless integration with external APIs like JSONPlaceholder for fetching and displaying dynamic content from remote sources."
            />
            <Card
              title="📱 Responsive Design"
              content="Mobile-first approach ensures your application looks great on all devices, from smartphones to desktop computers."
            />
          </div>
        </section>

        {/* Post Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </>
  );
}
