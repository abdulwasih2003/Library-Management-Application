import React from 'react'
import './BookReturnComponent.css'

function BookReturnComponent() {
  const handleFormSubmit= async(event)=>{
  event.preventDefault();
        alert('Book returned successfully')
     
  }
  return (
    <div>
      <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    <form onSubmit={handleFormSubmit}>
      <label>
        Book ID :       
        <input
        type="number"
        name='bookID'
        required/>
        </label>

      <label>
        Return Date :       
        <input
        type="date"
        name='returnDate'
      
        required/>
      </label>

      <button type='submit'>Submit</button>
    </form>
    <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    </div>
    
  )
}

export default BookReturnComponent