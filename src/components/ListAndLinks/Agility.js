import React, { Fragment, Component } from 'react';
import { ListGroup} from 'reactstrap';
import { Collapse } from 'antd';
import { connect } from "react-redux";
const { Panel } = Collapse;


export class Agility extends Component {
   
  render() {
    const text1 = `
    Description: 
    From a standing position with feet together, lift left foot back while bending forward. Once leg and chest is parallel to the ground, hold position for 1 second. Repeat for right foot. 
  `;

  const text2 = `
  Description: 
  Elevate your rear leg on a chair/bench. Place your front foot forward and ensure that your body is in an upright neutral position. Lower the knee of your rear foot towards the floor and return to the neutral standing position. 
  `;

  const text3 = `
  Description: 
  Place hands at hip level and elevate knees towards your hands in an alternating fashion.
  `;

  const text4 = `
  Description: 
  Hold dumbbells in a neutral standing position. Extend one leg out to the side and lower your body while ensuring both feet are on the ground. Repeat for the other leg.
  `;

  const text5 = `
  Description: 
  Lower your body down to a squat and jump up. Repeat.
  `;

  const text6 = `
  Description: 
  Normal skips with use of skipping rope.
  `;

  const text7 = `
  Description: 
  Using a skipping rope, time each jump such that the skipping rope crosses under your feet with every jump
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
            <p>{text1}</p>
          </Panel>
          <Panel header="Bulgarian split squat" key="2">
            <p>{text2}</p>
          </Panel>
          <Panel header="High Knees" key="3">
            <p>{text3}</p>
          </Panel>
          <Panel header="Lateral dumbbell Lunges" key="4">
            <p>{text4}</p>
          </Panel>
          <Panel header="Squat Jumps" key="5">
            <p>{text5}</p>
          </Panel>
          <Panel header="skipping - normal" key="6">
            <p>{text6}</p>
          </Panel>
          <Panel header="Skipping - double unders" key="7">
            <p>{text7}</p>
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
  



