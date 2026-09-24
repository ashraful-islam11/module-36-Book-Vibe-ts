import React from 'react';
import BookCard from '../shared/BookCard';
import IBookType from '@/types/books.type';

    const GetBooks = async () => {
        const response = await fetch('http://localhost:3000//booksData.json');
        const data = response.json();
        return data ;
    }

const Books = async () => {
    const booksData = await GetBooks();
    console.log(booksData );
    return (
        <section className='container mx-auto mt-25 '>

            <div className=' mb-8 '>
                <h2 className='text-[40px] text-[#131313] font-bold text-center'> Popular books  </h2>
            </div>

            {/* data fetching : */}

              <div className='grid grid-cols-3 gap-4 '> 

                    {
                        booksData.slice(0,6).map( (book : IBookType , index: number) => <BookCard key={index} book ={book} ></BookCard> )
                    }

             </div>

        </section>
    );
};

export default Books;