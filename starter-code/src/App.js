import React, { Component } from 'react';
import foods from './foods.json'

import './App.css';
import Foodbox from './components/Foodbox';
import Form from './components/Form';
import Search from './components/Form';



class App extends Component {
  constructor() {
    super()
    this.state = {
      foodsArr: foods,
      showForm: false,
      search: 'wesh'
    }
  }

  toggleForm = () => {

    let showFormCopy = this.state.showForm

    this.setState({showForm: !showFormCopy})
    
  }

  addFoodToForm = (foodObj) => {
    let newFood = [foodObj, ...this.state.foodsArr]
    this.setState({foodsArr: newFood})
  }

  updateSearch = (e) => {
    this.setState({search: e.target.value.substr(0, 20)})
  }

  render() {
    return (
      <div className="App">


      <button onClick={() => this.toggleForm()}>Add food</button>

      {
        this.state.showForm ?
        <Form {...this.state.foodsArr}addFood={this.addFoodToForm}/>
        : null
      }

        <Search 
          searching={this.state.search} 
          theSearch={this.updateSearch}
        />

      <Foodbox foods={this.state.foodsArr}/>

      </div>
    );
  }
}

export default App;
