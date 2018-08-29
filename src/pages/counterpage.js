import React from 'react'
import Link from 'gatsby-link'

class Counterpage extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {

    return (
    <div>
      <Link to="/">Go back to the homepage</Link>
       <h1>Counter</h1>
       <h1>current count: {this.state.count}</h1>
       <button onClick={() => this.setState(prevState => ({
       count: prevState.count +1,
        }))
       }
       >plus</button>
       <button onClick={() => this.setState(prevState => ({
       count: prevState.count -1,
        }))
       }
       >minus</button>
       <br/>
         <Link to="/">Go back to the homepage</Link>
     </div>
   )
  }
}

export default Counterpage;
