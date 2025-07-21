import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          Post #{id}
        </span>
        <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          User {userId}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
        {body}
      </p>
      
      <div className="mt-4 flex justify-between items-center">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
          Read More
        </button>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-blue-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
