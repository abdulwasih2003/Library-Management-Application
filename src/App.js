import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookDirectoryComponent from "./components/BookDirectoryComponent/BookDirectoryComponent";
import BookRegistrationComponent from "./components/BookRegistrationComponent/BookRegistrationComponent";
import BookDeletionComponent from "./components/BookDeletionComponent/BookDeletionComponent";
import BookIssueComponent from "./components/BookIssueComponent/BookIssueComponent";
import BookReturnComponent from "./components/BookReturnComponent/BookReturnComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { Helmet } from "react-helmet";
function App() { 
  return (
    <Router>
      <div className="topbg">
        <Helmet>
          <title>Library App</title>
        </Helmet>
      <div  className='container'>
        <HeaderComponent/>
      </div>
      <nav className='nav-menu'>
        <Link to='/'>List of Books</Link>
        <Link to='/admin/add'>Add New Book</Link>
        <Link to='/admin/delete'>Remove a Book</Link>
        <Link to='/admin/issue'>Issue a Book</Link>
        <Link to='/admin/return'>Return a Book</Link>
      </nav>
      </div>
      <div className='bg' style={{
    backgroundImage:'url("https://wallpaperaccess.com/full/124383.jpg")',
    
    
  }}> 
        <Routes>
        <Route exact path='/' element={<BookDirectoryComponent/>}></Route>
        <Route path='/admin/add' element={<BookRegistrationComponent/>}></Route>
        <Route path='/admin/delete' element={<BookDeletionComponent/>}></Route>
        <Route path='/admin/issue' element={<BookIssueComponent/>}></Route>
        <Route path='/admin/return' element={<BookReturnComponent/>}></Route>
      </Routes>
      </div>

    </Router>
  );
}

export default App;
