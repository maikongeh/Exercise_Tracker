import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Workout = props => (
  <tr>
   
    <td>{props.workout.difficulty}</td>
    <td >
    <Link to = {"/StrView/" + props.workout._id}> View </Link>
    </td>
  </tr>

)
export class StrWorkout extends Component {

  

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
    axios.get('http://localhost:8000/StrWorkout')
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
  });
  
  export default connect(mapStateToProps, {})(StrWorkout);
