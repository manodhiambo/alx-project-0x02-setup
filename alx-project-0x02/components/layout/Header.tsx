import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            ALX Project
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/home" 
                className="hover:text-blue-200 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="hover:text-blue-200 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/posts" 
                className="hover:text-blue-200 transition-colors"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link 
                href="/users" 
                className="hover:text-blue-200 transition-colors"
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
