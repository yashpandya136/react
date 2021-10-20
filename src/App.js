 import './App.css';
import React from 'react';
 import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  return (
    <>
    
   <Navbar title='TextUtils' /> 
   <div className="container my-3">
   <TextForm heading="Enter the text for Analyze below" />
   </div>
   
    </>
      );
}

export default App;
