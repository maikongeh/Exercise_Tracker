import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import axios from 'axios';
import {Input} from 'reactstrap';
import {connect} from 'react-redux';
import { message } from "antd";

// Exercise component is acts as a functional component so lazy to create a separate component
//functional components have no state or lifecycle methods. so no state no render

const Exercise = props => (
  <tr>
    <td>
      <Input type="checkbox" 
      style = {{marginLeft: '1rem'}}
      disabled = {props.disabledCheckBox()}
      onChange = {()=> props.addExercise(props.exercise._id)}/>    
    </td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.sets}</td>
    <td>{props.exercise.reps}</td>
    <td>
      <Link to = {"/ExEdit/" + props.exercise._id}> Edit </Link> | 
      <a href = "#" onClick = {()=> props.deleteExercise(props.exercise._id)}>Delete</a>
    </td>
  </tr>

)

export class ExList extends Component {
  constructor(props){
    super(props);

    this.onChangeDiff = this.onChangeDiff.bind(this);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.disabledCheckBox = this.disabledCheckBox.bind(this);
    this.undo = this.undo.bind(this);

    this.state = {
      difficulty: '',
      difficultyArr: [],
      CheckedNumber : 0,
      exercises: [],
      exercise1: {_id: 'nullID', value: null},
      exercise2: {_id: 'nullID', value: null},
      exercise3: {_id: 'nullID', value: null},
      exercise4: {_id: 'nullID', value: null},
      TooManyExerciseWarning : 'Too Many'
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8000/Explosive/')
      .then(response => {
        this.setState({
          exercises: response.data
          })
        }).catch(err => {
          console.log(err);
      })

      axios.get('http://localhost:8000/difficulty')
    .then(response=> {
      this.setState({
      difficultyArr: response.data.map(s=> s.difficulty),
      difficulty: response.data[0].difficulty
    })}
    ).catch(err => {
      console.log(err);
    })
  }

  disabledCheckBox() {
    console.log(this.state.CheckedNumber)
    if(this.state.CheckedNumber> 3) {
      return true
    } else return false
  }

  onChangeDiff(e) {
    this.setState({
      difficulty: e.target.value
    })
  }

  addExercise(id) {
    axios.get('http://localhost:8000/Explosive/' + id)
    .then( response => {
      if(this.state.exercise1._id === id) {
        this.setState({
          exercise1: {_id: 'nullID', value: null},
          CheckedNumber: this.state.CheckedNumber - 1
        })        
      } else if(this.state.exercise2._id === id) {
        this.setState({
          exercise2: {_id: 'nullID', value: null},
          CheckedNumber: this.state.CheckedNumber - 1,
        })
      } else if(this.state.exercise3._id === id) {
        this.setState({
          exercise3: {_id: 'nullID', value: null},
          CheckedNumber: this.state.CheckedNumber - 1
        })
      } else if(this.state.exercise4._id === id) {
        this.setState({
          exercise4: {_id: 'nullID', value: null},
          CheckedNumber: this.state.CheckedNumber - 1
        })
      } else if(this.state.exercise1.value === null){
       this.setState({
         exercise1: response.data,
         CheckedNumber: this.state.CheckedNumber + 1
       })
      } else if(this.state.exercise2.value === null) {
        this.setState({
          exercise2: response.data,
          CheckedNumber: this.state.CheckedNumber + 1
        })
      } else if(this.state.exercise3.value === null) {
        this.setState({
          exercise3: response.data,
          CheckedNumber: this.state.CheckedNumber + 1
        })
      } else if(this.state.exercise4.value === null) {
        this.setState({
          exercise4: response.data,
          CheckedNumber: this.state.CheckedNumber + 1
        })
      } else {
        console.log(this.state.TooManyExerciseWarning)
      }
      
    }).then(()=> {
      console.log(this.state)
      console.log(this.state.CheckedNumber)
    }) 
  }

  deleteExercise(id) {
    axios.delete('http://localhost:8000/Explosive/' + id)
          .then(res => console.log(res.data));
        this.setState({
          exercises: this.state.exercises.filter(exercises => exercises._id !== id)
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

  onSubmit(e) {
    //stops it from doing the normal submit functionality
    e.preventDefault();

    const ExWorkout = {
        difficulty: this.state.difficulty,
        exercise1: this.state.exercise1,
        exercise2: this.state.exercise2,
        exercise3: this.state.exercise3,
        exercise4: this.state.exercise4
    }

    console.log(ExWorkout);
    if(this.state.exercise1._id ==='nullID'|| this.state.exercise2._id === 'nullID'||
    this.state.exercise3._id === 'nullID'||this.state.exercise4._id === 'nullID'){
      message.error("Please select 4 exercises!" , 1)
    } else {
      console.log(ExWorkout);
    
      axios.post('http://localhost:8000/ExWorkout/add', ExWorkout)
    .then(res => console.log(res.data))
    .then(() => {
      this.props.history.push('/ExWorkout');
      message.success("Workout Added!", 1);
    }).catch((error) => {
      console.log(error)
    })
    }

 
  }

  undo() {
    window.location = '/ExList';
  }

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <div>
            <h1>Create Explosive Workout</h1>
        <br/>

        <div className = "form-group">
                  <label>Choose level of Difficulty</label>
                  <select ref = "userInput"
                      required
                      className = "form-control"
                      value = {this.state.difficulty}
                      onChange = {this.onChangeDiff}>
                          
                          {
                              this.state.difficultyArr.map(function(diff) {
                                  return <option
                                    key = {diff}
                                    value = {diff}> {diff} 
                                    </option>;
                              })
                          }
                  </select>
              </div>


              <h3>Select 4 exercises to submit</h3>
        <br/>

        <form onSubmit = {this.undo}>
                <div className = "form-group">
                      <input 
                       type = "submit"
                       value = "Undo Selection"
                       className = "btn btn-primary"
                      
                       />
                </div>
        </form>

        <table className = "table">
          <thead className = "thead-light">
            <tr>
              <th> </th>
              <th>Description</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* calls the exerciseList method above */}
            {this.exerciseList()}
          </tbody>
        </table>

        <Link to = {"/ExCreate"}
          
        > Add Exercise</Link>

        <br/>


        <form onSubmit = {this.onSubmit}>

                <div className = "form-group">
                      <input 
                       type = "submit"
                       value = "Save this Workout"
                       className = "btn btn-primary"
                      
                       />
                </div>
        </form>
          </div>
        ) : (
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

export default connect(mapStateToProps, {})(ExList);
