import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import axios from 'axios';
import {Input} from 'reactstrap';
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
    <td>{props.exercise.weight}</td>
    <td>{props.exercise.sets}</td>
    <td>{props.exercise.reps}</td>
    <td>
      <Link to = {"/StrEdit/" + props.exercise._id}> Edit </Link> | 
      <a href = "#" onClick = {()=> props.deleteExercise(props.exercise._id)}>Delete</a>
  
    </td>
  </tr>

)

export class StrList extends Component {
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
    axios.get('http://localhost:8000/Strength/')
      .then(response => {
        this.setState({
          exercises: response.data
          })
        }).catch(err => {
          console.log(err);
      })

      axios.get('http://localhost:8000/difficulty')
        .then(res => {
          this.setState({
            difficultyArr: res.data.map(s=> s.difficulty),
            difficulty : res.data[0].difficulty
          })
        })
  }

  addExercise(id) {
    axios.get('http://localhost:8000/Strength/' + id)
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

  onChangeDiff(e) {
    this.setState({
      difficulty: e.target.value
    })
  }

  disabledCheckBox() {
    console.log(this.state.CheckedNumber)
    if(this.state.CheckedNumber> 3) {
      return true
    } else return false
  }

  deleteExercise(id) {
    axios.delete('http://localhost:8000/Strength/' + id)
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

  undo() {
    window.location = '/StrList';
  }

  onSubmit(e) {
    //stops it from doing the normal submit functionality
    e.preventDefault();

    const StrWorkout = {
        difficulty: this.state.difficulty,
        exercise1: this.state.exercise1,
        exercise2: this.state.exercise2,
        exercise3: this.state.exercise3,
        exercise4: this.state.exercise4
    }

    console.log(StrWorkout);

    axios.post('http://localhost:8000/StrWorkout/add', StrWorkout)
    .then(res => console.log(res.data));
    window.location = ('/StrList')


    // How to do the bottom thing Async so that it waits for post request to be complete before rerouting to the List

}

  render() {
    return (
      <div>
        <h1>Create Strength Workout</h1>
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
                                    key = {diff}x
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
              <th></th>
              <th>Description</th>
              <th>Weight</th>
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

        <Link to = {"/StrCreate"}
          
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
    )
  }
}

export default StrList
