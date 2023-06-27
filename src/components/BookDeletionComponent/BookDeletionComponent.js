import React, { useState } from 'react'
import './BookDeletionComponent.css'
function BookDeletionComponent() {


  const[bookID,setBookID]=useState('')
  const handleChange=(event)=>{
    setBookID(event.target.value)
  }

  const handleFormSubmit=async(event)=>{
    event.preventDefault();
    await fetch(`http://localhost:8080/api/v1/book/${bookID}`,{
      method:'DELLETE'
    })
    .then((response)=>{
      if(response.status === 500){
        alert('Error!')
      }
      else{
        
        alert('Book Deleted successfully')
        window.location.href='/'
      }
    })
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
      value={bookID}
      onChange={handleChange}
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

export default BookDeletionComponent