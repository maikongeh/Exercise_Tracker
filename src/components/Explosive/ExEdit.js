import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {message} from 'antd';

export class ExEdit extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeSets = this.onChangeSets.bind(this);
        this.onChangeReps = this.onChangeReps.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            Sets: 0,
            Reps: 0,
            // for later drop down user selection feature
            descriptionsArr: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/Explosive/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                
                description: response.data.description,
                sets: response.data.sets,
                reps: response.data.reps,
                duration: response.data.duration
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:8000/ExType/')
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
    }

    
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeSets(e) {
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

        const exercise = {
            
            description: this.state.description,
            sets: this.state.sets,
            reps: this.state.reps
        }
        if(this.state.sets === 0 || this.state.duration === 0){
            message.error('Invalid fields');
        } else {
            console.log(exercise);

        axios.post('http://localhost:8000/Explosive/update/'+ this.props.match.params.id, exercise)
        .then(res => console.log(res.data))
        .then(() => {
            this.props.history.push('/ExList')
          }).catch((error) => {
            console.log(error)
          })

          message.success("Exercise updated!", 1);
        }

    }

  render() {
    return (
      <div>{this.props.isAuthenticated ? (
          <div>
              <h3>Edit Explosive Exercise Log</h3>
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
                                    key = {description}
                                    value = {description}> {description} 
                                    </option>;
                              })
                          }
                  </select>
                
              </div>

              <div className = "form-group">
                  <label>Sets : </label>
                  <input 
                    type = "text"
                    required
                    className = "form-control"
                    value = {this.state.sets}
                    onChange = {this.onChangeSets}
                    />
              </div>

              <div className = "form-group">
                  <label>Reps : </label>
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
                       value = "Edit Explosive Exercise Log"
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
  
export default connect(mapStateToProps, {})(ExEdit);
