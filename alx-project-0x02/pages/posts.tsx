import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>Posts - ALX Project</title>
        <meta name="description" content="Posts page displaying data from API" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: PostProps[] = await response.json();

    return {
      props: { posts },
      revalidate: 60, // ISR: Regenerate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: { posts: [] },
    };
  }
}
