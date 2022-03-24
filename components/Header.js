import Image from "next/image";
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon, UsersIcon} from '@heroicons/react/solid';
import { useState,useEffect } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useRouter} from 'next/router'

export const Header=({placeholder})=>{
    const [Search,setSearch] = useState("");
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const [numOfGuests,setNumOfGuests] = useState(1);

    const [startDate1,setStartDate1] = useState();
    const [endDate1,setEndDate1] = useState();

    const router = useRouter();
    console.log("Yooo ",startDate)
    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:'selection'
    }

    const handleSelection=async(ranges)=>{
        const dat = ranges.selection.startDate;
            setStartDate(dat)
            setEndDate(ranges.selection.endDate)
       
        
    }

    

    const handleResetSearch=()=>{
        setSearch("")
    }

    const search=()=>{
        router.push({
            pathname:"/search",
            query:{
                location:Search,
                startDate:startDate.toISOString(),
                endDate:endDate.toISOString(),
                numOfGuests,
            },
        });
    };
    
    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* Left */}
        <div onClick={()=>router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
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
            <input 
            value={Search}
            onChange={(e)=>setSearch(e.target.value)}
            type="text" placeholder={placeholder || "Start your search"} className="pl-5 bg-transparent
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

        {Search&&(
            <div className="flex flex-col col-span-3 mx-auto">
                <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                    onChange={(e)=>handleSelection(e)}
                />
                <div className="flex items-center border-b mb-4">
                    <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                    <UsersIcon className="h-5"/>
                    <input 
                    value={numOfGuests}
                    onChange={(e)=>setNumOfGuests(e.target.value)}
                    min={1}
                    type="number" 
                    className="w-12 pl-2 text-lg outline-none text-red-400"/>
                </div>

                <div className="flex">
                    <button className="flex-grow text-gray-500"
                        onClick={()=>handleResetSearch()}
                    >Cancel</button>
                    <button className="flex-grow text-red-400"
                       onClick={()=>search()} 
                    >Search</button>
                </div>
            </div>
        )}

        </header>
    )
}