import './app.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('/');

  function onNav(event) {
    event.preventDefault();
    
    const target = event.target.getAttribute('href');
    console.log(target);
    setPage(target);
  }

  return (
    <div className="app">
      <Header onNav={onNav} />
      <Main page={page} onNav={onNav} />
      <Footer />
    </div>
  );
}

export default App;
