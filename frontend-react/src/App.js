import React from 'react';
import { About, Footer, Header, Skills, Work, } from './container';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.scss'

export const App = () => {
  return (
    <div className="app">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={[<Header />, <About />, <Work />, <Skills />, <Footer />]} />
          {/* <Route path="/item/:id" element={<WorkDetail />} /> */}
        </Routes>
      </Router>
    </div>


    // <div className="app">
    //   <Router>
    //     <Navbar />

    //     <Routes>
    //       <Route path="/" element={<Header />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/work" element={<Work />} />
    //       <Skills />
    //     </Routes>
    //     <Footer />
    //     <TestComponent />
    //   </Router>
    // </div>


  );
}

export default App;