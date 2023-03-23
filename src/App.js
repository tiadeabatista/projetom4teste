import './App.css';
import React from 'react';
import Headers from './Headers';
import Footer from './Footer';
import Home from './Home';
import styles from './home.module.css';


function App() {
  return (
    <div>
      <header>
        <Headers />
      </header>

      <section>
        < Home />
        <div className="banner">

        </div>

      </section>



      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
