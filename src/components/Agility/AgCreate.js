import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export class AgCreate extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeSets = this.onChangeSets.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            
            description: '',
            sets: 0,
            duration: 0,
            date: new Date(),
            // for later drop down user selection feature
            descriptionsArr: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/AgType/')
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

    // onChangeUserName(e) {
    //     this.setState({
    //         username: e.target.value
    //     });
    // }

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

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        //stops it from doing the normal submit functionality
        e.preventDefault();

        const AgExercise = {
            description: this.state.description,
            sets: this.state.sets,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(AgExercise);

        axios.post('http://localhost:8000/Agility/add', AgExercise)
        .then(res => console.log(res.data));


        // How to do the bottom thing Async so that it waits for post request to be complete before rerouting to the List
        window.location = '/AgList';
    }
    

  render() {
    return (
      <div>
          
          <h3>Create New Agility Exercise</h3>
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
                  {/* <input 
                    type = "text"
                    required
                    className = "form-control"
                    value = {this.state.description}
                    onChange = {this.onChangeDescription}
                    /> */}
                 
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
                  <label>Date: </label>
                  <div>
                      <DatePicker
                        selected = {this.state.date}
                        onChange = {this.onChangeDate}
                      />
                  </div>
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
    )
  }
}

export default AgCreate