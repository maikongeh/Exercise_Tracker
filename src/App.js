import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Navbar from "./components/Navbar";
import AgCreate from "./components/Agility/AgCreate";
import AgEdit from "./components/Agility/AgEdit";
import AgList from "./components/Agility/AgList";
import AgWorkout from "./components/Agility/AgWorkout";
import AgView from "./components/Agility/AgView";
import EnCreate from "./components/Endurance/EnCreate";
import EnEdit from "./components/Endurance/EnEdit";
import EnList from "./components/Endurance/EnList";
import EnView from "./components/Endurance/EnView"
import EnWorkout from "./components/Endurance/EnWorkout";
import ExCreate from "./components/Explosive/ExCreate";
import ExEdit from "./components/Explosive/ExEdit";
import ExList from "./components/Explosive/ExList";
import ExWorkout from "./components/Explosive/ExWorkout";
import ExView from "./components/Explosive/ExView";
import StrCreate from "./components/Strength/StrCreate";
import StrEdit from "./components/Strength/StrEdit";
import StrList from "./components/Strength/StrList";
import StrWorkout from "./components/Strength/StrWorkout";
import StrView from "./components/Strength/StrView";
import ListOfStrengthExercises from "./components/ListAndLinks/Strength";
import ListOfAgilityExercises from "./components/ListAndLinks/Agility";
import ListOfEnduranceExercises from "./components/ListAndLinks/Endurance";
import ListOfExplosiveExercises from "./components/ListAndLinks/Explosive";
// import registration from './components/auth/RegisterModal';
import loginpage from "./components/loginpage";
import HomePage from "./components/HomePage";
import registration from "./components/registration";

//with redux implementation
import { loadUser } from "./actions/authActions";

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Navbar />

            <br />
            {/* <Route path = "/" component = {HomePage}/> */}

            <Route path="/AgCreate" component={AgCreate} />
            <Route path="/AgEdit/:id" component={AgEdit} />
            <Route path="/AgList" component={AgList} />
            <Route path="/AgWorkout" component={AgWorkout} />
            <Route path="/AgView/:id" component={AgView} />
            <Route path="/EnCreate" component={EnCreate} />
            <Route path="/EnEdit/:id" component={EnEdit} />
            <Route path="/EnList" component={EnList} />
            <Route path="/EnWorkout" component={EnWorkout} />
            <Route path="/EnView/:id" component = {EnView}/>
            <Route path="/ExCreate" component={ExCreate} />
            <Route path="/ExEdit/:id" component={ExEdit} />
            <Route path="/ExList" component={ExList} />
            <Route path="/ExWorkout" component={ExWorkout} />
            <Route path="/ExView/:id" component = {ExView}/>
            <Route path="/StrCreate" component={StrCreate} />
            <Route path="/StrEdit/:id" component={StrEdit} />
            <Route path="/StrList" component={StrList} />
            <Route path="/StrWorkout" component={StrWorkout} />
            <Route path="/StrView/:id" component = {StrView}/>
            <Route path="/AllStr" component={ListOfStrengthExercises} />
            <Route path="/AllAg" component={ListOfAgilityExercises} />
            <Route path="/AllEn" component={ListOfEnduranceExercises} />
            <Route path="/AllEx" component={ListOfExplosiveExercises} />
            <Route path="/login" component={loginpage} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/registration" component={registration} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
