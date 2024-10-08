import React from 'react';

const AuthorCard = ({ author }) => {
  return (
    <div className='flex items-center gap-4 relative '>
      <span className={`h-3 w-3 ${author?.isActive ? "bg-green-600" : "bg-red-600"} rounded-full absolute bottom-1 left-9`}></span>
      <img className='w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-700' src={author?.profilePic.at(-1)} alt="author's photo" />
      <div className='text-sm'>
        <p className='font-semibold text-gray-800 dark:text-white text-nowrap'>{author?.fullName?.length > 12 ? author?.fullName?.substring(0, 12)+"..." : author?.fullName}</p>
        <p className='text-gray-600 dark:text-gray-400 text-nowrap'>{author?.username?.length > 12 ? author?.username?.substring(0, 12)+"..." : author?.username}</p>
      </div>
      {/* <p>{author?.bio}</p> */}
    </div>
  );
};

export default AuthorCard;
