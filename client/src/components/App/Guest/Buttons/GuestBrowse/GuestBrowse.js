import React from 'react';
import { Link } from 'react-router-dom';
export default function GuestBrowse() {
  return (
    <>
      <div className='ml-3 inline-flex rounded-md shadow'>
        <Link
          // to='/dashboard'
          to='/' // temp disable browse as guest
          className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 dark:text-yellow-500 bg-white dark:bg-gray-700 hover:bg-yellow-50 dark:md:hover:bg-yellow-800'
        >
          Browse as guest (disabled)
        </Link>
      </div>
    </>
  );
}
