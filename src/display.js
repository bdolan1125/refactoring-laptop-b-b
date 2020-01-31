import React from 'react'
import ReactDOM from 'reactDOM'
import { Component } from 'react'

export default class Display extends Component {
  render() {
    return(
    <div>
      <h3>Display</h3>
      <button onclick='selectItem()' key = '7'
        name = '15.6/" UHD (3840 x 2160)'
        cost = '15.3/" HGTV (3840 x 2160)'>
        </button>

      <button onclick='selectItem()' key = '8'
        name = 'Bohdi Linux'
        cost = '$300.00'>
      </button>
    </div>
    )
  }
};