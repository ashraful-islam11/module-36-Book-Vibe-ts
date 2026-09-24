import IBookType from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';


 interface IBookCardProps {
    book : IBookType;
 }
const BookCard = ({book} : IBookCardProps) => {
    const {  bookName, author, image, tags, rating }  = book;

    return (
        <div className=" bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      
      {/* Book Image Section */}
      <div className="bg-gray-100 rounded-xl p-8 flex justify-center items-center mb-4 relative h-65">
        <Image 
          src={image} 
          alt="Book Cover" 
          width={130} 
          height={150} 
          className="object-contain shadow-md rounded-md"
        />
      </div>

      {/* Tags / Badges */}
      <div className="flex gap-2 mb-3">
        <span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
          Young Adult
        </span>
        <span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
          Identity
        </span>
      </div>

      {/* Book Title */}
      <h2 className="text-xl font-serif font-bold text-gray-900 mb-1 min-h-14 ">
        {bookName}
      </h2>

      {/* Author Name */}
      <p className="text-sm text-gray-600 mb-4">By : {author}</p>

      {/* Divider Line */}
      <div className="border-t border-dashed border-gray-300 my-2"></div>

      {/* Category and Rating Footer */}
      <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
        <span> {tags}</span>
        <div className="flex items-center gap-1">
          <span className="font-medium text-gray-800">{rating} </span>
          
          {/* Rating Star Icon */}
      
        </div>
      </div>

      <div className=' mt-3 '>
        
        <Link href={`booksInfo/${book.bookId}`}>

        <button className=' bg-gray-500 text-white font-bold p-3 rounded-xl hover:cursor-pointer hover:bg-blue-950 w-full '>Book Details </button>
        </Link>
   
      </div>

    </div>
    );
};

export default BookCard;

   
