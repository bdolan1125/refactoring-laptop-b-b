import React from 'react'
import ReactDOM from 'reactDOM'
import { Component } from 'react'

export default class Os extends Component {

selectItem(){
  this.setState({
    id : this.id
  }); 
}

  render() {
    return(
    <div>
      <h3>Operating System</h3>
      <button onclick='selectItem()' key = '3'
        name = 'Ubuntu Linux 16.04'
        cost = '$200.00'>
        </button>

      <button onclick='selectItem()' key = '4'
        name = 'Bohdi Linux'
        cost = '$300.00'>
      </button>
    </div>
    )
  }
};