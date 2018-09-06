import React from 'react'
import Link from 'gatsby-link';

const IndexPage = () => (
  <div style={{
    margin: '0 auto',
    maxWidth: 1600,
    padding: '1.45rem 1.0875rem',
  }}
  >
    <div>
      <h1>Site PHOTO</h1>
      <p>Welcome to my photo gallery.</p>
    </div>
      {/* <Link to="/page-2/">Go to page 2</Link>
    <br />
      <Link to="/counterpage/">Go to Counter Page</Link>
    <br />
      <Link to="/contact/">Me contacter</Link>
    </div> */}
    <div id="imagebox">
      <img src="https://source.unsplash.com/random/300x200?sig=1" alt="random image"/>
      <img src="https://source.unsplash.com/random/300x200?sig=2" alt="random image"/>
      <img src="https://source.unsplash.com/random/300x200?sig=3" alt="random image"/>
      <img src="https://source.unsplash.com/random/300x200?sig=4" alt="random image"/>
    </div>
  </div>
)

export default IndexPage
