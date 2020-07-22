import React, { Component } from 'react'
import axios from 'axios';



const Workout = props => (
  <tr>
   
    <td>{props.workout.difficulty}</td>
    <td >
      {/* <Link to = {"/AgWorkout/" + props.workout._id}> View </Link> | 
      //not sure how to pass as props
       */}
      <a href = "#" onClick = {()=> console.log((props.workout._id))}>View | </a> 

      
      {/* View  |  */}
       Delete
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
    axios.get('http://localhost:8000/ExWorkout')
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

  // workoutList = () => (
  //   <ul>
  //     {this.AllWorkoutArr.map(item => (
  //       <li key={item.id}>
  //         <div>{item.id}</div>
  //         <div>{item.difficulty}</div>
  //       </li>
  //     ))}
  //   </ul>
  // );



  render() {
    return (
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
    )
  }
}

export default ExWorkout
