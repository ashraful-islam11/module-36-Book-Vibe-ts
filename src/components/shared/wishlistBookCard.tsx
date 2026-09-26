import IBookType from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

 interface IWishListType  {
    book : IBookType;
 }
const WishlistBookCard = ({book}  : IWishListType )=> {
    return  <>
   
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm ">
        <div className="flex flex-col gap-4 sm:flex-row">

            {/* Image */}
            <div className="flex h-full w-full shrink-0 items-center justify-center rounded-xl bg-gray-100 sm:h-36 sm:w-36">
            <Image
                src={book.image}
                alt={book.bookName}
                width = {300}
                height = {300}
                className="h-full w-auto object-contain"
            />
            </div>

            {/* Content */}
            <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">
                {book.bookName}
            </h2>

            <p className="mt-1 text-sm text-gray-600">
                By : {book.author}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-600">
                #Young Adult
                </span>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-600">
                #Identity
                </span>
            </div>

            <div className="mt-3 text-sm text-gray-500">
                Year of Publishing: {book.yearOfPublishing}
            </div>

            <div className="mt-2 text-sm text-gray-500">
                Publisher: {book.publisher}
            </div>

            <div className="mt-2 text-sm text-gray-500">
                Page {book.totalPages}
            </div>

            <div className="my-3 border-t border-gray-200"></div>

            <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs text-blue-500">
                Category: {book.category}
                </span>

                <span className="rounded-full bg-orange-50 px-4 py-1.5 text-xs text-orange-500">
                Rating: {book.rating}
                </span>

                <Link href={`booksInfo/${book.bookId}`}>
                    <button className="rounded-full bg-green-600 px-5 py-1.5 text-xs font-semibold text-white">
                View Details
                </button>
                </Link>
                
            </div>
            </div>
        </div>
                                  
     </div> 

     </>

};
export default WishlistBookCard;