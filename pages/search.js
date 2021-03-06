import React from 'react'
import { Footer, Header, InfoCard, Map } from '../components'
import {useRouter} from 'next/router'
import {format} from 'date-fns'

const Search=({searchResults})=>{
    console.log(searchResults)

    const router = useRouter()
    const {location, startDate, endDate, numOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')    

    const range = `${formattedStartDate} - ${formattedEndDate}`;
    
    return (
    <div>
        <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`}/>

        <main className='flex'>
            <section>
                <p className='text-xs'>300+ Stays - {range} - for {numOfGuests} Guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-2'>Stays in {location}</h1>
            
                <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms & Beds</p>
                    <p className='button'>More filters</p>
                </div>

                <div className='flex flex-col'>
            {searchResults.map(item=>(
                <InfoCard
                key={item.img} 
                location={item.location} 
                img={item.img}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
                />
            ))}
        </div>
            </section>
        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
            <Map searchResults={searchResults}/>
        </section>
        </main>



        <Footer/>
    </div>
    )
}

export default Search;

export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then((res)=>res.json());

    return{
        props:{
            searchResults,
        }
    }
}