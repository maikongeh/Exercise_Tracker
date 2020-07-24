import React, { Component } from 'react'
import axios from 'axios'; 
import {connect} from 'react-redux';
import {message} from 'antd';

export class EnEdit extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            duration: 0,
            // for later drop down user selection feature
            descriptionsArr: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/Endurance/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                
                description: response.data.description,
                duration: response.data.duration
   
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:8000/EnType/')
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

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }


    onSubmit(e) {
        //stops it from doing the normal submit functionality
        e.preventDefault();

        const exercise = {
            
            description: this.state.description,
            duration: this.state.duration
        }
        if(this.state.duration === 0){
            message.error('Invalid fields');
        } else {
            console.log(exercise);

        axios.post('http://localhost:8000/Endurance/update/'+ this.props.match.params.id, exercise)
        .then(res => console.log(res.data))
        .then(() => {
            this.props.history.push('/EnList')
          }).catch((error) => {
            console.log(error)
          })

          message.success("Exercise updated!", 1);
        }

    }

  render() {
    return (
      <div>
          {this.props.isAuthenticated ? (
            <div>
                <h3>Edit Endurance Exercise Log</h3>
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
                  <label>Duration/set (in minutes) : </label>
                  <input 
                    type = "text"
                    required
                    className = "form-control"
                    value = {this.state.duration}
                    onChange = {this.onChangeDuration}
                    />
              </div>

              
                  
                <div className = "form-group">
                      <input 
                       type = "submit"
                       value = "Edit Endurance Exercise Log"
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
  
  export default connect(mapStateToProps, {})(EnEdit);
