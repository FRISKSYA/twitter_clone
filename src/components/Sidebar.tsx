import Link from 'next/link';
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";

export default function Sidebar() {
    return (
      <div className='flex flex-col gap-4 p-3'>
        <Link href='/'>
          <FaSquareXTwitter className='w-16 h-16 cursor-pointer 
          p-3 hover:bg-gray-100 rounded-full transition-all
          duration-200 '>
          </FaSquareXTwitter>
        </Link>
        <Link href='/' className='flex items-center p-3
        hover:bg-gray-100 rounded-full transition-all
        duration-200 gap-2 w-fit
        '>
          <IoIosHome className='w-7 h-7'></IoIosHome>
          <span className='font-bold hidden xl:inline'>Home</span>
        </Link>
        <button className='bg-blue-400 text-white
        rounded-full hover:brightness-95 transition-all
        duration-200 w-48 h-9 shadow-md hidden xl:inline
        font-semibold
        '>
          Sign In
        </button>
      </div>
    )
}