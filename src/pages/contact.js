import React from 'react'
import Link from 'gatsby-link'

const contact = () => (
<div>
  <p>
    Ici il y aura un "form" contact !!!
  </p>

{/* copier-coller du code sur la doc netlify */}
  <form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

</div>
)

export default contact
