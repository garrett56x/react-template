import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

export default class Blog extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h2>Blog</h2>
        <ul>
          <li>
            <Link to="/blog/post1">Post 1</Link>
          </li>
          <li>
            <Link to="/blog/post2">Post 2</Link>
          </li>
        </ul>
      </div>
    );
  }
}
