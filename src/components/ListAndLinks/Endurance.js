import React, { Fragment, Component } from 'react'
import { ListGroup} from 'reactstrap';
import { Collapse } from 'antd';
import {connect} from 'react-redux'
const { Panel } = Collapse;

export class Endurance extends Component {
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
      <h2> List of Endurance Exercises</h2>
    </ListGroup>
      
    <Collapse accordion>
      
    <Panel header="Burpees" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="Interval Run 2min/1min" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Long run" key="3">
      <p>{text}</p>
    </Panel>
    <Panel header="Tempo run" key="4">
      <p>{text}</p>
    </Panel>
    <Panel header="Planks - up and down" key="5">
      <p>{text}</p>
    </Panel>
    <Panel header="Planks - spider" key="6">
      <p>{text}</p>
    </Panel>
    <Panel header="Planks - shouler touch" key="7">
      <p>{text}</p>
    </Panel>
    <Panel header="Wall sit" key="8">
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
  
  export default connect(mapStateToProps, {})(Endurance);
  
