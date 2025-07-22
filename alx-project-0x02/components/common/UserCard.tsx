import { UserProps } from '../../interfaces';

const UserCard = ({ name, email, address, phone, website, company }: UserProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{name}</h3>
      
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {email}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Website:</span> 
          <a 
            href={`https://${website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-1"
          >
            {website}
          </a>
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Address:</span> {address.street}, {address.suite}, {address.city} {address.zipcode}
        </p>
        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-700">{company.name}</p>
          <p className="text-sm text-gray-600 italic">"{company.catchPhrase}"</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
