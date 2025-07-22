import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { GetStaticProps } from 'next';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users - ALX Project</title>
        <meta name="description" content="Users page displaying user data from API" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Users</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UserProps[] = await response.json();

    return {
      props: { users },
      revalidate: 60, // ISR every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: { users: [] },
    };
  }
};

