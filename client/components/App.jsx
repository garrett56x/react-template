import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Landing from './Landing/Landing.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Blog from './Blog/Blog.jsx';
import Post from './Blog/Post/Post.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={Post} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
