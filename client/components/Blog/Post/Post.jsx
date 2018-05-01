import React from 'react';

export default class Post extends React.Component<Props> {
  render() {
  	const { slug } = this.props.match.params;
    return (
      <div style={{textAlign: 'center'}}>
        <h2>Post</h2>
        <p>Slug: {slug}</p>
      </div>
    );
  }
}
