import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { message } from "antd";

const Exercise = props => (
    <tr>     
      <td>{props.exercise.description}</td>
      <td>{props.exercise.weight}</td>
      <td>{props.exercise.sets}</td>   
      <td>{props.exercise.reps}</td>   
    </tr>
  
  )
  

export class StrView extends Component {

    constructor(props) {
        super(props);
        
        // this.onDeleteWorkout = this.onDeleteWorkout.bind(this);


        this.state = {
            ID : this.props.match.params.id,
            difficulty: '',
            exercise1: null,
            exercise2: null,
            exercise3: null,
            exercise4: null,
            exercises: []

        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/StrWorkout/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                difficulty: response.data.difficulty,
                exercise1: response.data.exercise1,
                exercise2: response.data.exercise2,
                exercise3: response.data.exercise3,
                exercise4: response.data.exercise4,
                exercises: [response.data.exercise1, response.data.exercise2, response.data.exercise3,response.data.exercise4]
            })
        })
        .then(()=> {console.log(this.state)})
        .catch(function(error) {
            console.log(error);
        })

    }
    exerciseList() {
        return this.state.exercises.map(currentexercise => {
          return<Exercise exercise = {currentexercise} 
                    key = {currentexercise._id}/>
        })
      }

    
      deleteExercise(id) {
        axios.delete('http://localhost:8000/StrWorkout/' + id)
              .then(res => console.log(res.data))
              .then(() => {
                this.props.history.push('/StrWorkout')
              }).catch((error) => {
                console.log(error)
              })

              message.success("Workout Deleted!", 1);
      }
  


  render() {
    return (
      <div>

          {this.props.isAuthenticated ? (
              <div>
                  <Link to="/StrWorkout" style = {{marginLeft: '1rem'}}> Back</Link>

                  <h1> {this.state.difficulty}</h1>
                <table className = "table">
                <thead className = "thead-light">
                <tr>
              
              <th>Description</th>
              <th>Weight</th>
              <th>Sets</th>
              <th>Reps</th>
            
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}          
          </tbody>
        </table>
        {this.props.role === "Coach" && (
                <button onClick = {()=> this.deleteExercise(this.props.match.params.id)}> Delete </button>

            )}  
    </div>
          ) :(
              <div>
            </div>
          )}

    
          
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
export default connect(mapStateToProps, {})(StrView);
  