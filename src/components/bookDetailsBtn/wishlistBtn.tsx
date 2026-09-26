'use client'
import { bookContext } from '@/app/context/BookContext';
import IBookType from '@/types/books.type';
import { Heart } from 'lucide-react';
import  {  useContext } from 'react';
import { toast,Bounce } from 'react-toastify';


const WishlistBtn = ( {bookDetails} : {bookDetails : IBookType}) => {
     
    const wishListBookProvider = useContext( bookContext)
     const { wishlistBooks , setWishlistBooks}  =  wishListBookProvider ;
     console.log( wishListBookProvider)


    const handleAddWishlist = ()=> {
        console.log( 'wishlist btn treggard ');
        setWishlistBooks( [...wishlistBooks, bookDetails]) ;
       toast.success(`you wishList :  ${bookDetails.bookName} book!`,{
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


        <div className=''>
               <button onClick = { ()=> handleAddWishlist()}
                          type="button"
                          className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600 w-full"
                        >
                          <Heart size={20} />
                          Wishlist
                        </button>
            
        </div>
    );
};

export default WishlistBtn;