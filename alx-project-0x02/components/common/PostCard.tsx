import { PostProps } from '../../interfaces';

const PostCard = ({ id, title, body, userId }: PostProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">Post #{id}</span>
        <span className="text-sm text-blue-600">User {userId}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3 capitalize">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
};

export default PostCard;
