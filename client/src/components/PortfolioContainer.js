import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Blog from './Blog';
import Contact from './Contact';
import About from "./About"
import Login from './Login'
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
   
    }
   if (currentPage === 'Blog') { 
      return <Blog />;
    }
    if (currentPage === 'Contact'){
    return <Contact />;
    }
    if (currentPage === 'Login'){
    
      return <Login />
  }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
