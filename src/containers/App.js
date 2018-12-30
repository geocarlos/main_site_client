import React, { Component } from 'react';
import SitePage from '../components/SitePage';
import BlogPage from '../components/BlogPage';
import Post from './Post';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageContext } from '../contexts/PageContext';
import { BrowserRouter as Router, Route } from "react-router-dom";
import pages from '../mockup/mock-page-content.json';
import posts from '../mockup/mock-blog-content.json';

const title = {
  en: 'Through Letters & Code',
  pt: 'Por Letras & Código'
}

class App extends Component {

  state = {
    lang: 'en',
    post: null,
    id: '',
    isHome: false
  }

  switchLang = (lang) => {
    this.setState({ lang });
    document.title = title[lang];
  }

  selectPost = (id, lang) => {
    try{
      this.setState({ post: posts[lang].filter(post => post.id === id)[0] });
    } catch(e){
      this.setState({ post: null});
    }
  }

  checkHome = (isHome) => {
    // Show big div in Header only if it is Home page
    this.setState({isHome});
  }

  componentDidMount() {
    this.setState({ lang: window.navigator.language.substring(0, 2) })
    const page = window.location.pathname;
    this.checkHome(page === '/home' || page === '/');
  }

  render() {

    return (
      <Router>
        <PageContext.Provider
          value={{
            pages, lang: this.state.lang,
            switchLang: this.switchLang,
            posts,
            selectPost: this.selectPost,
            post: this.state.post,
            isHome: this.state.isHome,
            checkHome: this.checkHome
          }}>
          <div className="container">
            <Header />

            <Route exact path='/' render={() => (
              <SitePage page='home' />
            )} />

            <Route path='/home' render={() => (
              <SitePage page='home' />
            )} />

            <Route path='/about' render={() => (
              <SitePage page='about' />
            )} />

            <Route exact path='/blog/' render={() => (
              <BlogPage page='blog' />
            )} />

            <Route path='/blog/:id' render={({ match }) => (
              <Post page='post' id={match.params.id} />
            )} />

            <aside>
              <div>Side Link List</div>
            </aside>
            <Footer />

          </div>

        </PageContext.Provider>
      </Router>
    );
  }
}

export default App;
