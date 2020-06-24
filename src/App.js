import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import AgCreate from './components/Agility/AgCreate';
import AgEdit from './components/Agility/AgEdit';
import AgList from './components/Agility/AgList';
import EnCreate from './components/Endurance/EnCreate';
import EnEdit from './components/Endurance/EnEdit';
import EnList from './components/Endurance/EnList';
import ExCreate from './components/Explosive/ExCreate';
import ExEdit from './components/Explosive/ExEdit';
import ExList from './components/Explosive/ExList';
import StrCreate from './components/Strength/StrCreate';
import StrEdit from './components/Strength/StrEdit';
import StrList from './components/Strength/StrList';
import ListOfStrengthExercises from './components/ListAndLinks/Strength';
import ListOfAgilityExercises from './components/ListAndLinks/Agility';
import ListOfEnduranceExercises from './components/ListAndLinks/Endurance';
import ListOfExplosiveExercises from './components/ListAndLinks/Explosive';
import loginpage from './components/loginpage';
import HomePage from './components/HomePage';




function App() {
  return (
    <Router>
      <div className = "container">
      <Navbar/>
      <br/>

    
    
      <Route path = "/AgCreate" component = {AgCreate}/>
      <Route path = "/AgEdit/:id" component = {AgEdit}/>
      <Route path = "/AgList" component = {AgList}/>
      <Route path = "/EnCreate" component = {EnCreate}/>
      <Route path = "/EnEdit/:id" component = {EnEdit}/>
      <Route path = "/EnList" component = {EnList}/>
      <Route path = "/ExCreate" component = {ExCreate}/>
      <Route path = "/ExEdit/:id" component = {ExEdit}/>
      <Route path = "/ExList" component = {ExList}/>
      <Route path = "/StrCreate" component = {StrCreate}/>
      <Route path = "/StrEdit/:id" component = {StrEdit}/>
      <Route path = "/StrList" component = {StrList}/>
      <Route path = "/AllStr" component = {ListOfStrengthExercises}/>
      <Route path = "/AllAg" component = {ListOfAgilityExercises}/>
      <Route path = "/AllEn" component = {ListOfEnduranceExercises}/>
      <Route path = "/AllEx" component = {ListOfExplosiveExercises}/>
      <Route path = "/loginpage" component = {loginpage}/>
      <Route path = "/Homepage" component = {HomePage}/>

      


      </div>
    </Router>

  );
}

export default App;
