import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
  
  }, [location.search]);
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Web</span>
            <span className='text-slate-700'>yapar</span>
          </h1>
        </Link>
        <form
          className='bg-slate-100 p-3 rounded flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/gallery'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Gallery
            </li>
          </Link>
         
            {currentUser ? (
               <Link to='/'>
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
              </Link>
            ) : (
              <Link to='sign-in' >
              <li className=' text-slate-700 hover:underline'> Sign in</li>
              </Link>
            )}
          
        </ul>
      </div>
    </header>
  );
}
