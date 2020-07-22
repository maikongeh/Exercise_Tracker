import React, { Component } from 'react'
import axios from 'axios';

const Exercise = props => (
    <tr>
      
      <td>{props.exercise.description}</td>
      <td>{props.exercise.sets}</td>
      <td>{props.exercise.duration}</td>
      
    </tr>
  
  )
  

export class AgView extends Component {

    constructor(props) {
        super(props);
        
        this.onDeleteWorkout = this.onDeleteWorkout.bind(this);


        this.state = {
            difficulty: '',
            exercise1: null,
            exercise2: null,
            exercise3: null,
            exercise4: null,
            exercises: []

        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/AgWorkout/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                difficulty: response.data.difficulty,
                exercise1: response.data.exercise1,
                exercise2: response.data.exercise2,
                exercise3: response.data.exercise3,
                exercise4: response.data.exercise4,
                exercises: this.exercises[0] = response.data.exercise1,
                exercises: this.exercises[1] = response.data.exercise2,
                exercises: this.exercises[2] = response.data.exercise3,
                exercises: this.exercises[3] = response.data.exercise4,

            })
        })
        .catch(function(error) {
            console.log(error);
        })

    }
    exerciseList() {
        return this.state.exercises.map(currentexercise => {
          return<Exercise exercise = {currentexercise} 
                    deleteExercise = {this.deleteExercise} 
                    addExercise = {this.addExercise}
                    disabledCheckBox = {this.disabledCheckBox}
                    key = {currentexercise._id}/>
        })
      }

      onDeleteWorkout(id) {
          axios.delete('http://localhost:8000/AgWorkout' + id)
            .then(res => console.log(res.data));
            //Do i need to setState back in AgWorkout since its in different route. When i go back to AgWorkout, 
            //will it component did mount?
            

      }
    
      deleteExercise(id) {
        axios.delete('http://localhost:8000/Agility/' + id)
              .then(res => console.log(res.data));
            this.setState({
              exercises: this.state.exercises.filter(exercises => exercises._id !== id)
            })
      }
  


  render() {
    return (
      <div>
          <h1> {this.state.difficulty}</h1>
        <table className = "table">
          <thead className = "thead-light">
            <tr>
              <th> </th>
              <th>Description</th>
              <th>Sets</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* calls the exerciseList method above */}
            {/* {this.exerciseList()} */}
            
          </tbody>
        </table>
      </div>
    )
  }
}

export default AgView
