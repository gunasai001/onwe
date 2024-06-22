import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Home, Users, Compass, Search, Newspaper, Calendar, Bell, Plus, User, Settings } from 'lucide-react';

const SideBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = (path: string) => pathname.includes(path);

  return (
    <div className="h-screen flex flex-col items-center p-4 bg-white">
      <div className="flex items-start justify-center">
        <Link href="/" className="text-gray-700 hover:text-gray-900">
          <h1 className="font-bold text-xl">ONWE</h1>
        </Link>
      </div>
      <hr className="border-t border-black my-4 w-full" />
      <div className="flex flex-col items-start w-full mt-4">
        <Link href="/home" className={`flex items-center text-black hover:text-gray-500 w-52 ml-10 ${isActive("/home") ? 'bg-gray-300 rounded-full' : ''}`}>
          <div className='flex p-4'>
            <Home size={26} strokeWidth={2} stroke='black' />
            <h1 className="ml-2 text-lg ">Home</h1>
          </div>
        </Link>
        <Link href="/clubs" className={`flex items-center text-black hover:text-gray-500 w-52 ml-10 ${isActive("/clubs") ? 'bg-gray-300 rounded-full' : ''}`}>
          <div className='flex p-4'>
            <Users strokeWidth={2} size={26} stroke='black' />
            <h1 className="ml-2 text-lg ">Clubs</h1>
          </div>
        </Link>
        {/* <Link href="/explore" className={`flex items-center text-black hover:text-gray-500 w-52 ml-10 ${isActive("/explore") ? 'bg-gray-300 rounded-full' : ''}`}>
          <div className='flex p-4'>
            <Compass size={26} strokeWidth={1.4} stroke='black' />
            <h1 className="ml-2 text-lg">Explore</h1>
          </div>
        </Link> */}
        <Link href="/search" className={`flex items-center text-black hover:text-gray-500 w-52 ml-10 ${isActive("/search") ? 'bg-gray-300 rounded-full' : ''}`}>
          <div className='flex p-4'>
            <Search size={26} strokeWidth={2} stroke='black' />
            <h1 className="ml-2 text-lg ">Search</h1>
          </div>
        </Link>
        <Link href="/magazines" className={`flex items-center text-black hover:text-gray-500 w-52 ml-10 ${isActive("/magazines") ? 'bg-gray-300 rounded-full' : ''}`}>
          <div className='flex p-4'>
            <Newspaper size={26} strokeWidth={2} stroke='black' />
            <h1 className="ml-2 text-lg ">Magazines</h1>
          </div>
        </Link>
        <Link href="/events" className={`flex items-center text-black hover:text-gray-500 w-52 ml-10 ${isActive("/events") ? 'bg-gray-300 rounded-full' : ''}`}>
          <div className='flex p-4'>
            <Calendar size={26} strokeWidth={2} stroke='black' />
            <h1 className="ml-2 text-lg ">Event</h1>
          </div>
        </Link>
        <Link href="/notifications" className={`flex items-center text-black hover:text-gray-500 w-52 ml-10 ${isActive("/notifications") ? 'bg-gray-300 rounded-full' : ''}`}>
          <div className='flex p-4'>
            <Bell size={26} strokeWidth={2} stroke='black' />
            <h1 className="ml-2 text-lg ">Notifications</h1>
          </div>
        </Link>
        <Link href="/create" className={`flex items-center text-black hover:text-gray-500 w-52 ml-10 ${isActive("/create") ? 'bg-gray-300 rounded-full' : ''}`}>
          <div className='flex p-4'>
            <Plus size={26} strokeWidth={2} stroke='black' />
            <h1 className="ml-2 text-lg ">Create</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-start w-full mt-36">
        <Link href="/profile" className={`text-black hover:text-gray-900  ml-10 flex items-center w-52 ${isActive("/profile") ? 'bg-gray-300 rounded-full' : ''}`}>
          <div className='flex p-4'>
            <User strokeWidth={2} size={26} stroke='black' />
            <h1 className="ml-2 text-lg ">Profile</h1>
          </div>
        </Link>
        <Link href="/settings" className={`text-black hover:text-gray-900 flex items-center w-52 ml-10 ${isActive("/settings") ? 'bg-gray-300 rounded-full' : ''}`}>
          <div className='flex p-4'>
            <Settings size={26} strokeWidth={2} stroke='black' />
            <h1 className="ml-2 text-lg">Settings</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
