import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewAccountForm() {
  const navigate = useNavigate();
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addUser = async () => {
    console.log('in fetch function');

    let output;

    try {
      const res = await fetch('http://localhost:3000/users/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      })
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          if (res.created) {
            window.alert('Successfully Created New Account');
            navigate('/dashboard');
          } else {
            setfirstname('');
            setlastname('');
            setEmail('');
            setPassword('');
            window.alert('Email address already taken, please enter a valid one or Sign In');
          }
          output = res;
          return output;
        });
      // if (res.status !== 200) throw new Error(res.status);
      // console.log(res);
      // return res;
    } catch (error) {
      throw new Error(`There was an issue adding the member to the database. ${error}`);
    }
  };

  const handleSubmit = (e) => {
    console.log('in handle submit');
    e.preventDefault();
    console.log(e);
    addUser({ firstname, lastname, email, password });
    // navigate('/dashboard');
  };

  return (
    <>
      <form className='mt-8 space-y-6' onSubmit={() => handleSubmit()}>
        <input type='hidden' name='remember' defaultValue='true' />
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <label htmlFor='email-address-create' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address-create'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border dark:bg-gray-700 border-gray-300 dark:border-gray-600 dark:placeholder-gray-500 placeholder-gray-500 dark:text-gray-100 text-gray-700 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='firstname' className='sr-only'>
              First Name
            </label>
            <input
              id='firstname'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border dark:bg-gray-700 border-gray-300 dark:border-gray-600 dark:placeholder-gray-500 placeholder-gray-500 dark:text-gray-100 text-gray-700 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
              placeholder='First name'
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='lastname' className='sr-only'>
              Last Name
            </label>
            <input
              id='lastname'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border dark:bg-gray-700 border-gray-300 dark:border-gray-600 dark:placeholder-gray-500 placeholder-gray-500 dark:text-gray-100 text-gray-700 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
              placeholder='Last name'
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border dark:bg-gray-700 border-gray-300 dark:border-gray-600 dark:placeholder-gray-500 placeholder-gray-500 dark:text-gray-100 text-gray-700 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* <div className='flex items-center justify-between'> */}
        {/* <div className='flex items-center'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='h-4 w-4 text-yellow-600 focus:ring-yellow-500 dark:bg-gray-800 border-gray-300 rounded'
            />
            <label htmlFor='remember-me' className='ml-2 block text-sm dark:text-gray-100 text-gray-700'>
              Remember me
            </label>
          </div> */}

        {/* <div className='text-sm'>
            <a href='#' className='font-medium text-yellow-600 hover:text-yellow-500'>
              Forgot your password?
            </a>
          </div> */}
        {/* </div> */}

        <div>
          {email && firstname && lastname && password ? (
            <Link
              to='/dashboard'
              onClick={(e) => handleSubmit(e)}
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
            >
              Submit
            </Link>
          ) : (
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </>
  );
}
