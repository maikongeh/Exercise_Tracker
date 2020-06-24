import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import axios from 'axios';

// Exercise component is acts as a functional component so lazy to create a separate component
//functional components have no state or lifecycle methods. so no state no render

const Exercise = props => (
  <tr>
    
    <td>{props.exercise.description}</td>
    <td>{props.exercise.sets}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to = {"/AgEdit/" + props.exercise._id}> edit </Link> | 
      <a href = "#" onClick = {()=> props.deleteExercise(props.exercise._id)}>delete</a>
    </td>
  </tr>

)

export class AgList extends Component {
  constructor(props){
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {exercises: []};
  }

  componentDidMount(){
    axios.get('http://localhost:8000/Agility/')
      .then(response => {
        this.setState({
          exercises: response.data
          })
        }).catch(err => {
          console.log(err);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:8000/Agility/' + id)
          .then(res => console.log(res.data));
        this.setState({
          exercises: this.state.exercises.filter(exercises => exercises._id !== id)
        })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return<Exercise exercise = {currentexercise} 
                deleteExercise = {this.deleteExercise} 
                key = {currentexercise._id}/>
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Agility exercises</h3>
        <table className = "table">
          <thead className = "thead-light">
            <tr>
              
              <th>Description</th>
              <th>Sets</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* calls the exerciseList method above */}
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AgList
