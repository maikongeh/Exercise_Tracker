import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



const Workout = props => (
  <tr>
   
    <td>{props.workout.difficulty}</td>
    <td >
        <Link to = {"/ExView/" + props.workout._id}> View </Link>
    </td>
  </tr>

)
export class ExWorkout extends Component {

  

  constructor(props){
    super(props);


  

      this.state = {
      AllworkoutArr: [],
      BworkoutArr: [],
      IworkoutArr: [],
      EworkoutArr: [],
      SortedArr:[]
   
    };
  }




  componentDidMount() {
    if(this.props.role === 'Coach') {
      console.log(this.props.name);
      axios.get('http://localhost:8000/ExWorkout')
      .then(res => {
        this.setState({
          AllworkoutArr: res.data.filter(workout=> workout.email === this.props.email),
          BworkoutArr: res.data.filter( workout => workout.difficulty === 'Beginner'),
          IworkoutArr: res.data.filter( workout => workout.difficulty === 'Intermediate'),
          EworkoutArr: res.data.filter(workout => workout.difficulty === 'Elite'),
        })
      }).then(res => {
        console.log(this.state);
      })
    } else {
      axios.get('http://localhost:8000/ExWorkout/ath')
      .then(res => {
        this.setState({
          AllworkoutArr: res.data,
          BworkoutArr: res.data.filter( workout => workout.difficulty === 'Beginner'),
          IworkoutArr: res.data.filter( workout => workout.difficulty === 'Intermediate'),
          EworkoutArr: res.data.filter(workout => workout.difficulty === 'Elite'),
        })
      }).then(res => {
        console.log(this.state);
      })
    }
  }

  workoutList() {
    
    return this.state.AllworkoutArr
    .sort((b, a) => 
    a.difficulty.localeCompare(b.difficulty)
    )
    .map(currentworkout => {
      
      return<Workout workout = {currentworkout} 
              
                key = {currentworkout._id}/>
    })
  }




  render() {
    return (
      <div>
          {this.props.isAuthenticated ? (
              <div>
                   <table className = "table">
          <thead className = "thead-light">
            <th>Difficulty</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {this.workoutList()}
          </tbody>
        </table>
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
    role: state.auth.user === null ? "Athlete" : state.auth.user.role,
  name: state.auth.user === null ? 'name' : state.auth.user.name,
  email: state.auth.user === null ? 'email' : state.auth.user.email
  });
  
  export default connect(mapStateToProps, {})(ExWorkout);