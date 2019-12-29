import React from "react";
import PropTypes from "prop-types";

import Header from '../Header/Header';

import './styles.css';

export default function Layout({ children, className }) {
  return (
        <div className="layout">
          <Header />
          <main className={`${className}`}>{children}</main>
        </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};
