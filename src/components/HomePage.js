import React, { Component } from 'react'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>This is the damn Home Page</h1>
        <br/>
        <h1>JK Welcome to Sportify</h1>

        <h2>Exercises are differentiated into 4 categories</h2>
        <ol>
            <li>Agility</li>
            <li>Endurance</li>
            <li>Explosive</li>
            <li>Strength</li>
        </ol>

        <p>Exercise List showcases a video demonstration of all of the exercises from these 4 subtypes</p>
        <p>Exercises can be created and logged in the 2 options</p>

    
      </div>
    )
  }
}

export default HomePage
