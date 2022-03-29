import React, { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();//call the constructor function of the component class
    this.state = {
      monsters: [],
      searchField:''
    };
    //locate in class app
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users }
        }));
  }
  onSearchChange=
    (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(()=>{
        return {searchField}
      });
    }

  render() {
   const {monsters, searchField}=this.state;
   const {onSearchChange}=this;
    const filtermonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monster List</h1>
        <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='Search Monsters'/>
        <CardList monsters={filtermonster}/>
      </div>
    );


  }
}

export default App;
