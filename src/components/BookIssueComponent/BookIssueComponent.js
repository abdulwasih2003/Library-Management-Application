import React from 'react'
import './BookIssueComponent.css'
function BookIssueComponent() {
  const handleFormSubmit= async(event)=>{
    event.preventDefault();
          alert('Book Issued successfully')
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
        Issue Date :       
        <input
        type="date"
        name='issueDate'
      
        required/>
      </label>
    <button type='submit'>Submit</button>
    </form>
        <p>Registration of New Book</p>
        <p>Registration of New Book</p>
        <p>Registration of New Book</p>
        <p>Registration of New Book</p>
        <p>Registration of New Book</p>
     
        </div>
  )
}

export default BookIssueComponent