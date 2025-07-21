import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default Card;
