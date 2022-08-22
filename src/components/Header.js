import React from 'react';
import logo from '../Netflix_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

export const Header = () => {
  return (
    <div className='flex justify-around items-center m-2 fixed w-full '>
        {/* logo */}
        <div>
           <img className='p-2 cursor-pointer w-40 h-auto' src={logo} alt='netflix_logo' /> 
        </div>
        {/* header nav comp */}
        <div className='flex items-center space-x-5 p-2 m-2 text-white font-bold '>
         <p className='cursor-pointer hover:opacity-30'>Home</p>
         <p className='cursor-pointer hover:opacity-30'>TV Shows</p>
         <p className='cursor-pointer hover:opacity-30'>Movies</p>
         <p className='cursor-pointer hover:opacity-30'>New & Popular</p>
         <p className='cursor-pointer hover:opacity-30'>MyList</p>
         <p className='cursor-pointer hover:opacity-30'>Browse By Languages</p>
        </div>
        {/* header right comp */}
        <div className='flex items-center space-x-5 p-2 text-white'>
        <SearchIcon />
        <NotificationsOutlinedIcon />
        <AccountCircleOutlinedIcon />
        </div>
    </div>
  )
}
