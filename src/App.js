import React from 'react';

import './App.css';
import Posts from './component/posts';
import Header from './component/header';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
