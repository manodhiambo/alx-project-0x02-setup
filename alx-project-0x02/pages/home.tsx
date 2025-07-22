import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import PostModal from '../components/common/PostModal';

export default function HomePage() {
  const [posts, setPosts] = useState([
    {
      title: "Welcome to Our Home Page",
      content: "This is a sample card component displaying dynamic content."
    },
    {
      title: "Another Card",
      content: "Here's another example of how the Card component works with different content."
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Head>
        <title>Home - ALX Project</title>
        <meta name="description" content="Home page with dynamic cards" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
            <Button onClick={() => setIsModalOpen(true)}>
              Add New Post
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <Card 
                key={index}
                title={post.title} 
                content={post.content} 
              />
            ))}
          </div>
        </div>
      </main>
      
      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </>
  );
}
