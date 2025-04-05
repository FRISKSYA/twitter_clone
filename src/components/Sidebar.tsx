import Link from 'next/link';
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";

export default function Sidebar() {
    return (
      <div>
        <Link href='/'>
          <FaSquareXTwitter className='w-16 h-16 cursor-pointer 
          p-3 hover:bg-gray-100 rounded-full'>
          </FaSquareXTwitter>
        </Link>
      </div>
    )
}