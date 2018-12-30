import React, { Component } from 'react';
import SitePage from '../components/SitePage';
import { PageContext } from '../contexts/PageContext';
import { BrowserRouter as Router, Route } from "react-router-dom";
import pages from '../mockup/mock-page-content.json';
import posts from '../mockup/mock-blog-content.json';

class App extends Component {

  state = {
    lang: 'en',
    post: null,
    id: ''
  }

  switchLang = (lang) => {
    this.setState({lang});
  }

  selectPost = (id, lang) => {
    this.setState({post: posts[lang].filter(post => post.id === id)[0]});
  }

  render() {
    
    return (
      <Router>
        <PageContext.Provider 
          value={{ pages, lang: this.state.lang, 
          switchLang: this.switchLang,
          posts,
          selectPost: this.selectPost,
          post: this.state.post }}>

          <Route exact path='/' render={()=>(
            <SitePage page='home' isHome={true} />
          )}/>

          <Route path='/home' render={()=>(
            <SitePage page='home' isHome={true} />
          )}/>

          <Route path='/about' render={()=>(
            <SitePage page='about' />
          )}/>

          <Route exact path='/blog/' render={()=>(
            <SitePage page='blog' />
          )}/>

          <Route path='/blog/:id' render={({match})=>(
            <SitePage page='post' id={match.params.id}/>
          )}/>


        </PageContext.Provider>
      </Router>
    );
  }
}

export default App;
