import React, { Component } from 'react';

export default class ContactPage extends Component {
  render() {
    return (
      <div className="pf-page contact-page">
        <h1>Customer service</h1>
        <p>
          Fishlabs is filled with the freshest and most precious ingredients,
          the design is genuinely simple and unique. Drop us a line and we will
          make sure to reply shortly.
        </p>
        <h2>delphyn.lieu@gmail.com</h2>
        <img src="assets/img/contact/contact-img.jpg" alt="Contact" />
      </div>
    );
  }
}
