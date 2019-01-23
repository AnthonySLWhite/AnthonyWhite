import smallLogo from '../img/small_Logo.svg';
import { pleaseWait } from '../addons/please-wait.min';
window.loading_screen = pleaseWait({
  logo: smallLogo,
  backgroundColor: '#231e25',
  loadingHtml: `
  <p class="loading-message">Don't wait for an opportunity.</p> <p>Create it!</p>
  <div class="sk-cube-grid">
  <div class="sk-cube sk-cube1"></div>
  <div class="sk-cube sk-cube2"></div>
  <div class="sk-cube sk-cube3"></div>
  <div class="sk-cube sk-cube4"></div>
  <div class="sk-cube sk-cube5"></div>
  <div class="sk-cube sk-cube6"></div>
  <div class="sk-cube sk-cube7"></div>
  <div class="sk-cube sk-cube8"></div>
  <div class="sk-cube sk-cube9"></div>
  </div> `,
});
const pageLoading = {
  start: performance.now(),
  finish: 0,
  timeTaken: () => pageLoading.finish - pageLoading.start,
};
// ----- Package Imports ----- //
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// ----- File Imports ----- //
import Header from './components/header';
import Skills from './components/skills';
import About from './components/about';
import Projects from './components/projects';
import ContactMe from './components/contactMe';
import Footer from './components/footer';
// ----- End Imports ----- //

/*
TODO
- Summary: Add PT and ENG support
* Code needed: location.hostname === 'antoniobranco.eu' ? lang = 'PT' : lang = 'EN';
*/
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="skills_about">
          <Skills />
          <About />
        </div>
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

loadAfterRender(() => {
  pageLoading.finish = performance.now();
  const ToDo = () => {
    window.loading_screen.finish();
    const root = document.getElementById('root');
    root.style.display = 'block';
    setTimeout(() => {
      root.style.opacity = '1';
    }, 0);
  };
  if (pageLoading.timeTaken() < 1500) {
    setTimeout(() => {
      ToDo();
    }, 2000);
  } else {
    ToDo();
  }
});

/*
<==========================================>
<        Load after everything rendered    >
<==========================================>
*/

function loadAfterRender(callback) {
  const imgs = document.images,
    len = imgs.length;
  let counter = 0;

  [].forEach.call(imgs, img => {
    img.addEventListener('load', incrementCounter, false);
  });

  function incrementCounter() {
    counter++;
    if (counter === len) {
      return callback();
    }
  }
}
