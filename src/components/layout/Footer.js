import React from 'react';

/**
 * Portfolio footer
 * @param {*} props props are ignored for footer
 */
const Footer = _props => {
  return (
    <footer className="pf-footer">
      <a
        className="social-link"
        href="https://www.linkedin.com/in/delphine-lieu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin" />
      </a>
      <p>delphyn.lieu@gmail.com</p>
      <img src="assets/img/logo/footer-img.svg" alt="footer logo" />
      <p className="copyright">
        © copyright 2018 delphinelieu.fr. all rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
