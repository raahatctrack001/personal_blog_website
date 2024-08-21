import React from 'react';

const AuthorCard = ({ author }) => {
  return (
    <div className='flex items-center gap-4'>
      <img className='w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-700' src={author?.profilePic} alt="author's photo" />
      <div className='text-sm'>
        <p className='font-semibold text-gray-800 dark:text-white'>{author.fullName}</p>
        <p className='text-gray-600 dark:text-gray-400'>{author.username}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
