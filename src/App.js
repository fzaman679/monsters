import React, {Component} from 'react';
import './App.css';
import  { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = { 
      monsters: [], //leave it as an empty array at first 
      searchfield: ''
      
    }

    //we are adding this because without this it would show as a failure
    //this is robost way, therefore we do it with arrow functions 
    //this.handleChange = this.handleChange.bind(this);
  }

 
  

  /*same as 
  const monsters = this.state.monsters
  const searchfield = this.state.searchfield
  */

  /*
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"

  */


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')  //fetch form api request, inside goes url, then it returns a promise 
    .then( response => response.json() ) //getting response in JSON format 
    .then( users => this.setState( {monsters: users}) ) 
  }
  
  
  handleChange = event => {
    this.setState( {searchfield: event.target.value}  )
  }
  
  
  render() {

    const {monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter( monster => 
    monster.name.toLowerCase().includes(searchfield.toLowerCase()) ); //includes returns true or false, whether or not there is what we are looking for in an array


    return (
      <div className="App">
        <h1> Monsters  Rolodex </h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange = { this.handleChange } //move this.setState just incease we would want to use it again in the future 
        />

        <CardList monsters = {filteredMonsters} />

      </div>
    );
  };

};

export default App;
