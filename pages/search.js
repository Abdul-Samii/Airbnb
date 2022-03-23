import React from 'react'
import { Footer, Header } from '../components'
import {useRouter} from 'next/router'

const Search=()=>{
    const router = useRouter()
    const {location, startDate, endDate, numOfGuests} = router.query;
    return (
    <div>
        <Header/>

        <main className='flex'>
            <section>
                <p className='text-xs'>300+ Stays for {numOfGuests} Guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-2'>Stays in {location}</h1>
            
                <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms & Beds</p>
                    <p className='button'>More filters</p>
                </div>
            </section>
        </main>



        <Footer/>
    </div>
    )
}

export default Search