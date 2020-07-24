import React, { Fragment, Component } from 'react'
import { ListGroup} from 'reactstrap';
import { Collapse } from 'antd';
import {connect} from 'react-redux'
const { Panel } = Collapse;

export class Strength extends Component {
  render() {

    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

    return (
      <div>
          {this.props.isAuthenticated? (
              <div>
            <Fragment>
    <ListGroup>
      <h2> List of Strength Exercises</h2>
    </ListGroup>
      
    <Collapse accordion>
      
    <Panel header="Barbell squat" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="Bench Press" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Bicep curls" key="3">
      <p>{text}</p>
    </Panel>
    <Panel header="Deadlift" key="4">
      <p>{text}</p>
    </Panel>    
    <Panel header="Romanian Deadlift" key="5">
      <p>{text}</p>
    </Panel>   
    <Panel header="Skullcrusher" key="6">
      <p>{text}</p>
    </Panel>   
    <Panel header="Tricep extension" key="7">
      <p>{text}</p>
    </Panel>   
    <Panel header="Weighted Dips" key="8">
      <p>{text}</p>
    </Panel>   
    <Panel header="Weighted lunges" key="9">
      <p>{text}</p>
    </Panel>   
    <Panel header="Weighted split squat" key="10">
      <p>{text}</p>
    </Panel>  
  </Collapse>
  </Fragment>
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
  
  export default connect(mapStateToProps, {})(Strength);
  

