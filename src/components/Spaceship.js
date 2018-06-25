import React from 'react'

class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  name: "Ship",
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
}
//
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])

export default Spaceship
