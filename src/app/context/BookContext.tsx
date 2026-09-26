'use client'

import React, { createContext, ReactNode, useState } from 'react';




export const bookContext = createContext({}) 


const BooksProvider  = ({children} : {children : ReactNode} ) => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
   const sharedData = {
        readBooks, 
        setReadBooks,
        wishlistBooks,
        setWishlistBooks

   }

    return (
        <bookContext.Provider value= { sharedData }>
            {children}
        </bookContext.Provider>
    );
};

export default BooksProvider ;