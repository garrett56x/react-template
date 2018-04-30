import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header/Header.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
  
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div style={{textAlign: 'center'}}>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div style={{textAlign: 'center'}}>
    <h2>About</h2>
  </div>
);

const Contact = () => (
  <div style={{textAlign: 'center'}}>
    <h2>Contact</h2>
  </div>
);
