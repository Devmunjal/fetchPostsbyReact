import React from 'react';

import './App.scss';
import Header from './component/header';
import Footer from './component/footer';
import Table from './component/table';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
