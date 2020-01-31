import React from '.react'
import ReactDOM from '.reactDOM'
import { Component } from 'react'


export default class Cpu extends Component {
    render() {
      return(
      <div>
        <h3>Processors</h3>
        <button onclick='selectItem()' key = '1'
          name = '17th Generation Intel Core HB'
          cost = '$700.00'>
          </button>
  
        <button onclick='selectItem()' key = '2'
          name = 'Professor X AMD Fire Breather'
          cost = '$1,200.00'>
        </button>
      </div>
      )
    }
};