import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {connect} from 'react-redux';
import { message } from "antd";

export class StrCreate extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeSets = this.onChangeSets.bind(this);
        this.onChangeReps = this.onChangeReps.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            
            description: '',
            weight: 0,
            sets: 0,
            reps: 0,
            // for later drop down user selection feature
            descriptionsArr: [],
            rpeArr:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/StrType/')
        .then(response => {
            if(response.data.length > 0) {
                this.setState({
                    descriptionsArr: response.data
                    .sort((a, b) => a.description.localeCompare(b.description))
                    .map(des=> des.description),

                    description: response.data[0].description
                    
                })
            }
        })

        axios.get('http://localhost:8000/Num')
        .then(response => {
            this.setState({
                rpeArr:response.data.map(s => s.RPE),
                weight: response.data[0].RPE
            })
        })
    }



    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeWeight(e) {
        this.setState({
            weight: e.target.value
        });
    }


    onChangeSets(e){
        this.setState({
            sets: e.target.value
        });
    }

    onChangeReps(e) {
        this.setState({
            reps: e.target.value
        });
    }


    onSubmit(e) {
        //stops it from doing the normal submit functionality
        e.preventDefault();

        const StrExercise = {
            email: this.props.email,
            description: this.state.description,  
            weight: this.state.weight,        
            sets: this.state.sets,
            reps: this.state.reps
        }
        if(this.state.sets === 0 || this.state.reps === 0){
            message.error('Invalid fields!')
        } else {
            console.log(StrExercise);

            axios.post('http://localhost:8000/Strength/add', StrExercise)
            .then(res => console.log(res.data))
            .then(() => {
                this.props.history.push('/StrList')
              }).catch((error) => {
                console.log(error)
              })
    
              message.success("Exercise added!", 1);

        }
        
    }
    

  render() {
    return (
      <div>
          {this.props.isAuthenticated ? (
              <div>
                  <h3>Create New Strength Exercise</h3>
          <form onSubmit = {this.onSubmit}>

              <div className = "form-group">
                  <label>Description: </label>
                  <select ref = "userInput"
                      required
                      className = "form-control"
                      value = {this.state.description}
                      onChange = {this.onChangeDescription}>
                          
                          {
                              this.state.descriptionsArr.map(function(description) {
                                  return <option
                                    key = {description}x
                                    value = {description}> {description} 
                                    </option>;
                              })
                          }
                  </select>
              </div>

              <div className = "form-group">
                  <label>Weight(in RPE): </label>
                  <select ref = "userInput"
                      required
                      className = "form-control"
                      value = {this.state.weight}
                      onChange = {this.onChangeWeight}>
                          
                          {
                              this.state.rpeArr.map(function(RPE) {
                                  return <option
                                    key = {RPE}x
                                    value = {RPE}> {RPE} 
                                    </option>;
                              })
                          }
                  </select>
              </div>


              <div className = "form-group">
                  <label>Sets: </label>
                  <input 
                    type = "text"
                    required
                    className = "form-control"
                    value = {this.state.sets}
                    onChange = {this.onChangeSets}
                    />
              </div>

              <div className = "form-group">
                  <label>Reps: </label>
                  <input 
                    type = "text"
                    required
                    className = "form-control"
                    value = {this.state.reps}
                    onChange = {this.onChangeReps}
                    />
              </div>

        
                  
                <div className = "form-group">
                      <input 
                       type = "submit"
                       value = "Create Exercise Log"
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
    email: state.auth.user === null ? 'email' : state.auth.user.email
  });
  
export default connect(mapStateToProps, {})(StrCreate);
