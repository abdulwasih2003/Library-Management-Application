import React , { useState} from 'react'
import './BookRegistrationComponent.css'

function BookRegistrationComponent() {
  const[books,setBooks]=useState({
    
    bookName: '',
    authorName: '',
    copiesCount:''
  })
  const handleChange=(event)=>{
    const{name,value}=event.target
    setBooks({...books,[name]:value})
  }
  const handleFormSubmit= async(event)=>{
    event.preventDefault();
    await fetch('http://localhost:8080/api/v1/book/',{
      method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(books)
    })
    .then((response)=>{
      if(response.status === 500){
        alert('Error!')
      }
      else{
        
        alert('Book added successfully')
        window.location.href='/'
      }
    })
  }
  return (
    <div>    
      <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    <p>Registration of New Book</p>
    <form onSubmit={handleFormSubmit}>
      
      
      <label>
        Book Name : 
        
        <input
        type="text"
        name='bookName'
        value={books.bookName}
        onChange={handleChange}
        required/>
      </label>

      
      <label>
        Author Name :          
        <input
        type="text"
        name='authorName'
        value={books.authorName}
        onChange={handleChange}
        required/>
      </label>
      
      <label>
        Quantity: 
        <input
        type="number"
        name='copiesCount'
        value={books.copiesCount}
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
    </div>
  )
}

export default BookRegistrationComponent