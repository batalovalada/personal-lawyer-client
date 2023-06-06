import React from 'react';
import './assets/styles/App.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Footer from './components/Footer';
import Section from './components/Section';
import Articles from './components/Articles';
import Services from './components/Services';
import Staff from './components/Staff';
import Promo from './components/Promo';

function App() {
  return (
    <div className="App">
        <Header />
        <Intro title={'О нас'}/>
        <About/>

        <Section section={{ title: 'Title Title title', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.' }}/>
        
        <Articles/>

        <Services/>

        <Promo/>

        <Staff/>
        <Footer/>
    </div>
  );
}

export default App;
