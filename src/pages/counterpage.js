import React from 'react';
import Link from 'gatsby-link';


class Counterpage extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {

    return (
    <div>
      {/* <Link to="/">Go back to the homepage</Link> */}
       <h1>Counter</h1>
       <h3>current count: {this.state.count}</h3>
       <button onClick={() => this.setState(prevState => ({
       count: prevState.count +1,
        }))
       }
       > + </button>
       <button onClick={() => this.setState(prevState => ({
       count: prevState.count -1,
        }))
       }
       > - </button>
     </div>
   )
  }
}

export default Counterpage;
