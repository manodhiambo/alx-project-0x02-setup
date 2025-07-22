import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

interface UsersPageProps {
  users: UserProps[];
  error?: string;
}

const Users: React.FC<UsersPageProps> = ({ users, error }) => {
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Users - Error</title>
          <meta name="description" content="Error loading users" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Users - Next.js Project</title>
        <meta name="description" content="Browse all users in our Next.js application" />
        <meta name="keywords" content="users, profiles, Next.js, TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Users
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our amazing community of users. Each profile showcases unique individuals 
            from different locations around the world.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Total Users: <span className="font-semibold text-blue-600">{users.length}</span>
          </div>
        </div>

        {/* Users Grid */}
        {users.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                phone={user.phone}
                website={user.website}
                address={user.address}
                company={user.company}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded max-w-md mx-auto">
              <p>No users found.</p>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        {users.length > 0 && (
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              User Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">
                  {users.length}
                </div>
                <div className="text-gray-600">Total Users</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600">
                  {new Set(users.map(user => user.address.city)).size}
                </div>
                <div className="text-gray-600">Cities</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">
                  {new Set(users.map(user => user.company.name)).size}
                </div>
                <div className="text-gray-600">Companies</div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Next.js Project. Built with TypeScript and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

// Static Site Generation with data fetching
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const users: UserProps[] = await response.json();

    return {
      props: {
        users,
      },
      // Revalidate every 24 hours (86400 seconds)
      revalidate: 86400,
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    
    return {
      props: {
        users: [],
        error: error instanceof Error ? error.message : 'Failed to fetch users',
      },
      // Retry after 60 seconds if there was an error
      revalidate: 60,
    };
  }
};

export default Users;
