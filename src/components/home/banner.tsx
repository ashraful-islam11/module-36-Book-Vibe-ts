import Image from 'next/image';
import React from 'react';
import BannerImage from '@/assets/hero_img.jpg'
 
const Banner  = () => {
    return (
       <section className=' container mx-auto '>
        <div className='grid grid-cols-2 bg-[#131313]/5 py-20 px-25 gap-20 items-center rounded-3xl mt-12'>
            {/* left site :  */}
            <div className=' space-y-4'>

                <h2 className='text-[50px] font-bold '>Books to freshen up <br /> your bookshelf</h2>
                <button className=' btn text-[#ffffff] bg-[#23BE0A]  font-bold text-xl'>View The List</button>

            </div>

            <div>
                <Image src={BannerImage} alt='banner image ' width={320} height={390} className='rounded-2xl'></Image>
            </div>
            
        </div>

       </section>
    );
};

export default Banner ;