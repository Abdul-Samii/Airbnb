import Image from 'next/image'

export const MediumCard=({img,title})=>{
    return(
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
            <Image
                src={img}
                layout="fill"
                objectFit='contain'
                className='rounded-xl'
            />
            
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
        
        </div>
    )
}