import React, { Component } from 'react';
import SitePage from '../components/SitePage';
import { PageContext } from '../contexts/PageContext';
import { BrowserRouter as Router, Route } from "react-router-dom";
import pages from '../mockup/mock-page-content.json';

class App extends Component {

  render() {
    return (
      <Router>
        <PageContext.Provider value={{ pages, titles: Object.keys(pages) }}>
          <Route exact path='/' render={()=>(
            <SitePage page='home' isHome={true} />
          )}/>
          <Route exact path='/home' render={()=>(
            <SitePage page='home' isHome={true} />
          )}/>
          <Route exact path='/about' render={()=>(
            <SitePage page='about' />
          )}/>
          <Route exact path='/blog' render={()=>(
            <SitePage page='blog' />
          )}/>
        </PageContext.Provider>
      </Router>
    );
  }
}

export default App;
