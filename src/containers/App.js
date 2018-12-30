import React, { Component } from 'react';
import SitePage from '../components/SitePage';
import { PageContext } from '../contexts/PageContext';
import pages from '../mockup/mock-page-content.json'

class App extends Component {
  state = {
    page: '',
    isHome: true
  }

  componentDidMount(){
    console.log(PageContext.Consumer._context._currentValue);
  }

  render() {
    return (
      <PageContext.Provider value={{id: this.state.page, isHome: this.state.isHome, pages}}>
        <SitePage />
      </PageContext.Provider>
    );
  }
}

export default App;
