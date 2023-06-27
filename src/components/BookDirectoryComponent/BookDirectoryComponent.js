import React, { useEffect ,useState} from 'react'
import './BookDirectoryComponent.css'

function BookDirectoryComponent() {
    const [books, setBooks]=useState([])
    useEffect(() =>{
        fetchBooks()
    },[])
    const fetchBooks=async()=>{
        try{
        const response=await fetch('http://localhost:8080/api/v1/book/')
        const data =await response.json()
        setBooks(data)
        }
        catch(error){
            console.log("Error: ",error);
        }
    }
  return (
    <div className='book-list'>
  
        {books.map((book)=>(
            <div className='book-card' key={book.bookID}>
                <p ><b><u>Book Id :</u>{book.bookID}</b></p>
                <p><b>Book Name : {book.bookName}</b></p>
                <p><b>Author Name : {book.authorName}</b></p>
                <p><b>No.of Copies Available : {book.copiesCount}</b></p>
            </div>

        )
        )}

   
    </div>
  )

}

export default BookDirectoryComponent