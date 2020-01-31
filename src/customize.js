import React from 'react'
import ReactDOM from 'reactDOM'
import { Component } from 'react'
import Os from '/os'
import Gpu from '/gpu'
import Cpu from '/cpu'
import Display from '/display'
import { render } from 'react-dom'

export default class  extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: '1',
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: '$700.00',
      },
      {
        id: '2',
        name: 'Professor X AMD Fire Breather with sidewinder technology',
        cost: '$1,200.00',
      },
      {
        id: '3',
        name: 'Ubuntu Linux 16.04',
        cost: '$200.00',
      },
      {
        id: '4',
        name: 'Bodhi Linux',
        cost: '$300.00',
      },
      {
        id: '5',
        name: 'Toyota Corolla 1.5v',
        cost: '$1,150.98',
      },
      {
        id: '6',
        name: 'Mind mild breeze 2000',
        cost: '$1,345.00',
      },
      {
        id: '7',
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: '$1,500.00',
      },
      {
        id: '8',
        name: '15.3" HGTV (3840 x 2160) Home makeover edition',
        cost: '$1,400.00',
      },
    ]}
  }


  render() {
    return(
      <div className='cust-list'>
        <Os />
        <Gpu />
        <Cpu />
        <Display />
      </div>
    )
  };
