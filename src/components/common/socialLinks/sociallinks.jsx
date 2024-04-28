import React, { Component } from 'react';



export class SocialLinks extends Component{
  render(){
    return (
      <div className="social text-center">
        <a
          href="https://www.facebook.com/heshamsalehmohammed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <i className="fa fab fa-facebook-official" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <i className="fa fab fa-twitter" />
        </a>
      </div>
    );
  }
}