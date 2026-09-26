'use client'

import React, { useContext } from 'react';
import { bookContext } from '../context/BookContext';
import { CalendarDays, FileText, Star, Users } from 'lucide-react';
import Image from 'next/image';
import ListedBookCard from '@/components/shared/listedBookCard';
import IBookType from '@/types/books.type';
import WishlistBookCard from '@/components/shared/wishlistBookCard';

const ListedBookPage = () => {

    const { readBooks, wishlistBooks} = useContext( bookContext);

    console.log( 'read books ' , readBooks , 'wish list books ' , wishlistBooks);
    return (
        <div className=' container mx-auto '>
            <h2 className=' text-3xl font-bold bg-base-300 rounded-2xl text-center p-5 m-7  '> Books  </h2>
             
             {/* name of each tab group should be unique */}
            <div className="tabs tabs-border">
                 <input type="radio" name="my_tabs_2" className="tab" aria-label={`Read Book (${readBooks.length})`} defaultChecked />

                        <div  className="tab-content border-base-300 bg-base-100 p-10 space-y-3">
                            {   readBooks.length > 0 ? 
                                readBooks.map( (book  : IBookType , index : number) => {
                                    return <ListedBookCard key={index} book ={book} ></ListedBookCard>
                                
                                }) :  <p className='text-2xl font-bold text-center  '> No Book Available </p>
                            }
                            
                            </div>

                  <input type="radio" name="my_tabs_2" className="tab" aria-label={`Wishlist Book (${wishlistBooks.length})`} />
            

                    <div className="tab-content border-base-300 bg-base-100 p-10 space-y-3">
                        
                    
                            {
                                wishlistBooks.length > 0 ? 
                            wishlistBooks.map( (book  : IBookType , index : number) => {
                            
                                return <WishlistBookCard key={index} book={book} ></WishlistBookCard>  
                                
                            
                            })  
                            :  <p className='text-2xl font-bold text-center  text-green-400  '> No Book Available </p>
                            
                        }

                    </div>
            </div>  
        </div>
       
    );
};

export default ListedBookPage;