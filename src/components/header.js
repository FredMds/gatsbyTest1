import React from 'react';
import Link from 'gatsby-link';
import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
});

const siteTitle = "Photo Gallery"

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rgb(0, 0, 0)',
      marginBottom: '1.35rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Photo Gallery
        </Link>
      </h1>

        <p> <Link to="/counterpage">Counterpage</Link> </p>
        <p> <Link to="/page-2">Page 2</Link> </p>
        <p> <Link to="/contact">Me contacter</Link> </p>

    </div>
  </div>
)

export default Header
