import ReadBtn from '@/components/bookDetailsBtn/readBtn';
import WishlistBtn from '@/components/bookDetailsBtn/wishlistBtn';
import IBookType from '@/types/books.type';
import { BookOpen, CalendarDays, Heart, Star, Tag, UserRound } from 'lucide-react';
import Image from 'next/image';


 interface IParamsPropsDetails {
    params : Promise<{
        bookId : string
    }>
 }


    const GetBooks = async () => {
        const response = await fetch('http://localhost:3000//booksData.json');
        const data = response.json();
        return data ;
    }

    
const BookDetailsIdPage = async ({params}: IParamsPropsDetails) => {
      
        const {bookId}  = await params ;
        // console.log(bookId);
  
        const bookData = await GetBooks(); 
        const bookDetails : IBookType  = bookData.find( (book : IBookType) => book.bookId === Number( bookId) )  ;

        const { bookName,author, image,review,totalPages, rating,category, tags, publisher, yearOfPublishing } = bookDetails;

    // console.log(bookDetails);
    return (

         <div className="mx-auto mt-10 w-full max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10">

        {/* Book Image */}
         <div className="flex min-h-100 items-center justify-center rounded-2xl bg-gray-100 p-8 sm:min-h-120">
          <Image
            src={image}
            alt={bookName}
            width={500}
            height={500}
            className="h-auto max-h-125 w-auto rounded-md object-contain shadow-xl"
          />
        </div> 
        

        {/* Book Information */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-600">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            {bookName}
          </h1>

          {/* Author */}
          <div className="mb-5 flex items-center gap-2 text-gray-600">
            <UserRound size={18} />
            <span>
              By <span className="font-semibold text-gray-900">{author}</span>
            </span>
          </div>

          {/* Rating + Pages */}
          <div className="mb-5 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <Star
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="font-semibold text-gray-900">
                {rating}
              </span>
            </div>

            <div className="h-5 w-px bg-gray-300" />

            <div className="flex items-center gap-2 text-gray-600">
              <BookOpen size={20} />
              <span>{totalPages} Pages</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-6 border-t border-gray-200" />

          {/* Review */}
          <p className="mb-6 text-sm leading-7 text-gray-600 sm:text-base">
            {review}
          </p>

          <div className="border-t border-gray-200 pt-6">

            {/* Book Metadata */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Pages */}
              <div className="flex items-start gap-3">
                <BookOpen className="mt-1 text-gray-700" size={20} />

                <div>
                  <p className="text-sm text-gray-500">
                    Total Pages
                  </p>
                  <p className="font-semibold text-gray-900">
                    {totalPages}
                  </p>
                </div>
              </div>

              {/* Publisher */}
              <div className="flex items-start gap-3">
                <UserRound className="mt-1 text-gray-700" size={20} />

                <div>
                  <p className="text-sm text-gray-500">
                    Publisher
                  </p>
                  <p className="font-semibold text-gray-900">
                    {publisher}
                  </p>
                </div>
              </div>

              {/* Year */}
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-1 text-gray-700" size={20} />

                <div>
                  <p className="text-sm text-gray-500">
                    Year of Publishing
                  </p>
                  <p className="font-semibold text-gray-900">
                    {yearOfPublishing}
                  </p>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-start gap-3">
                <Tag className="mt-1 text-gray-700" size={20} />

                <div>
                  <p className="text-sm text-gray-500">
                    Category
                  </p>
                  <p className="font-semibold text-gray-900">
                    {category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

            <ReadBtn bookDetails = {bookDetails} ></ReadBtn>
             {/* <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
            >
              <BookOpen size={20} />
              Read
            </button> */}

            {/* <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              <Heart size={20} />
              Wishlist
            </button> */}
           <WishlistBtn bookDetails ={ bookDetails}></WishlistBtn>

          </div>
        </div>
      </div>
    </div>
    );
};

export default BookDetailsIdPage;