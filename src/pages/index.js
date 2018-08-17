import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div>
      <h1>Site PHOTO</h1>
      <p>Welcome to my photo gallery.</p>

      <Link to="/page-2/">Go to page 2</Link>
    <br />
      <Link to="/counterpage/">Go to Counter Page</Link>
    </div>
    <div>
      <img src="https://source.unsplash.com/random/1200x900" alt=""/>
    </div>
  </div>
)

export default IndexPage
