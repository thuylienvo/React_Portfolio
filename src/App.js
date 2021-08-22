import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './page/Portfolio'


function App() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <Home />
    }
  };

  return (
    <>
    {/* Navigation */}
    <Nav currentPage={currentPage} handlePageChange={handlePageChange}>
      </Nav>
    <main>
      {renderPage(currentPage)}
    </main>
  </>
  )
};

export default App;
