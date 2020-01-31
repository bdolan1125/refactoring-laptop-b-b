import React from 'react'
import ReactDOM from 'reactDOM'
import { Component } from 'react'

export default class Gpu extends Component {
  render(){
    return(
    <div>
      <h3>Video Cards</h3>
      <button onclick='selectItem()' key = '5'
        name = 'Toyota Corolla'
        cost = '$1,150.98'>
        </button>

      <button onclick='selectItem()' key = '6'
        name = 'Mind Mild Breeze 2000'
        cost = '$1,345.00'>
      </button>
    </div>
    )
  }
};