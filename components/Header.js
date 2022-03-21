import Image from "next/image";
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon} from '@heroicons/react/solid';

export const Header=()=>{
    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* Left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image
                src='/airbnb.png'
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                alt='image'
            />
        </div>

        {/* Middle */}
        <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
            <input type="text" placeholder="Start your search" className="pl-5 bg-transparent
            outline-none flex-grow text-gray-600 placeholder-gray-400"/>
            <SearchIcon className="h-8 bg-red-400 text-white rounded-full 
            cursor-pointer hidden md:inline-flex md:mx-2"/>
        </div>


        {/* Right     */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
            <p className="hidden md:inline">Become a host</p>
            <GlobeAltIcon className="h-6 hidden md:inline"/>
            <div className="flex items-center space-x-2 p-2 rounded-full border-2">
                <MenuIcon className="h-6"/>
                <UserCircleIcon className="h-6"/>
            </div>
        </div>
        </header>
    )
}