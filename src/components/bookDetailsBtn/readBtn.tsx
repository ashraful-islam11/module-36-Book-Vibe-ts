'use client'
import  { bookContext } from '@/app/context/BookContext';
import IBookType from '@/types/books.type';
import { BookOpen } from 'lucide-react';
import { useContext } from 'react';
import { toast,Bounce } from 'react-toastify';
 


const ReadBtn = ( {bookDetails} : {bookDetails : IBookType}) => {

         const booksProvider = useContext( bookContext);
         const { readBooks , setReadBooks  } = booksProvider;

        console.log( booksProvider);

    const handleReadBook = ()=> {
        console.log('handle read book triggerd ');

         setReadBooks( [...readBooks , bookDetails ])
        // console.log( bookDetails);
        
        toast.success(`you Read book :  ${bookDetails.bookName}`,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
           
        
    }
    return (
        <div>
           
            <button   onClick={ ()=> handleReadBook()}
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition hover:bg-gray-100 w-full "
              
            >
              <BookOpen size={20} />
              Read
            </button>


        </div>
    );
};

export default ReadBtn ;
