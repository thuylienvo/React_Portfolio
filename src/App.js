import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Designs from './page/Designs'


function App() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Designs':
        return <Designs />;
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
    <Header>
    {/* Navigation */}
    <Nav currentPage={currentPage} handlePageChange={handlePageChange}>
      </Nav>
    </Header>
    <main>
      {renderPage(currentPage)}
    </main>
  </>
  )
};

export default App;
