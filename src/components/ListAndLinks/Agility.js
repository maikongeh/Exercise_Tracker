import React, { Fragment, Component } from 'react';
import { ListGroup} from 'reactstrap';
import { Collapse } from 'antd';
import { connect } from "react-redux";
const { Panel } = Collapse;


export class Agility extends Component {
   
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
            <h2> List of Agility Exercises</h2>
              </ListGroup>
            
              <Collapse accordion>
            
          <Panel header="Aeroplane" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="Bulgarian split squat" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="High Knees" key="3">
            <p>{text}</p>
          </Panel>
          <Panel header="Lateral dumbbell Lunges" key="4">
            <p>{text}</p>
          </Panel>
          <Panel header="Squat Jumps" key="5">
            <p>{text}</p>
          </Panel>
          <Panel header="skipping - normal" key="6">
            <p>{text}</p>
          </Panel>
          <Panel header="Skipping - double unders" key="7">
            <p>{text}</p>
          </Panel>
          
        </Collapse>
        </Fragment>
        </div>

          ) :(
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
  
  export default connect(mapStateToProps, {})(Agility);
  



