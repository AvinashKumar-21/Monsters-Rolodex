import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'; 
import { SearchBox } from './components/Search-Box/Search-box.component.jsx';


class App extends Component
{
  constructor()
  {
    super();
    this.state={
      Monsters:[],
      SearchField:''
      }
    };
    componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resonse =>resonse.json())
    .then(users=>this.setState({Monsters:users}));
  }
  handleChange=e=>
  {
    this.setState({SearchField: e.target.value})
  };
    render()
    {
      const { Monsters,SearchField }=this.state;
      const filteredMonsters=Monsters.filter(Monsters=>Monsters.name.toLowerCase().includes(SearchField.toLowerCase()));
      return (
        <div className='App'>
          <h1>Monster Rolodex</h1>
          <SearchBox 
          placeholder='Search Monster'
          handleChange={this.handleChange}/>
          <CardList monsters={filteredMonsters} />
        </div> 
      )
    }
}

export default App;
