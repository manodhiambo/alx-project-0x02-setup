import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import PostCard from '@/components/common/PostCard';
import Button from '@/components/common/Button';
import { PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const data: PostProps[] = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setError(null);
    fetchPosts();
  };

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <>
        <Head>
          <title>Posts - Next.js Project</title>
        </Head>
        <div className="flex justify-center items-center min-h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Posts - Next.js Project</title>
        </Head>
        <div className="text-center space-y-4">
          <div className="text-red-600 text-lg">Error: {error}</div>
          <Button onClick={handleRefresh}>
            Try Again
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Posts - Next.js Project</title>
      </Head>

      <div className="space-y-8">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            All Posts
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Explore posts fetched from JSONPlaceholder API
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white rounded-lg shadow-md px-6 py-3">
              <span className="text-2xl font-bold text-primary-600">{posts.length}</span>
              <div className="text-gray-600">Total Posts</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-3">
              <span className="text-2xl font-bold text-green-600">{currentPage}</span>
              <div className="text-gray-600">Current Page</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-3">
              <span className="text-2xl font-bold text-purple-600">{totalPages}</span>
              <div className="text-gray-600">Total Pages</div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Posts {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, posts.length)} of {posts.length}
            </h2>
            <Button onClick={handleRefresh} className="bg-green-600 hover:bg-green-700">
              Refresh
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="flex justify-center">
            <div className="flex space-x-2">
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Previous
              </Button>
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                const isCurrentPage = pageNumber === currentPage;
                
                // Show first page, last page, current page, and pages around current
                const shouldShow = 
                  pageNumber === 1 || 
                  pageNumber === totalPages || 
                  Math.abs(pageNumber - currentPage) <= 2;
                
                if (!shouldShow) {
                  // Show ellipsis for gaps
                  if (pageNumber === currentPage - 3 || pageNumber === currentPage + 3) {
                    return (
                      <span key={pageNumber} className="px-3 py-2 text-gray-500">
                        ...
                      </span>
                    );
                  }
                  return null;
                }
                
                return (
                  <Button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={isCurrentPage ? 'bg-primary-700' : 'bg-gray-500 hover:bg-gray-600'}
                  >
                    {pageNumber}
                  </Button>
                );
              })}
              
              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next
              </Button>
            </div>
          </section>
        )}

        {/* Footer Info */}
        <section className="text-center bg-gray-100 rounded-lg p-6">
          <p className="text-gray-600">
            Data provided by{' '}
            <a
              href="https://jsonplaceholder.typicode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              JSONPlaceholder
            </a>
            {' '}• A free fake online REST API for testing and prototyping
          </p>
        </section>
      </div>
    </>
  );
}
