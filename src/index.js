import React, { Component } from 'react'

import getPhrase from './phrases'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      phrase: 'reticulating splines . . .',
      progress: '0',
      display: 'block'
    }
  }
  componentWillMount() {
    let newPhrase = getPhrase()
    this.setState({phrase: newPhrase})
    setTimeout(() => { this.setState({progress: '300'}) }, 100);
  }
  componentDidMount() {
    let newPhrase
    setInterval(() => {
      newPhrase = getPhrase()
      this.setState({phrase: newPhrase, display: 'none', progress: '0'})
      setTimeout(() => { this.setState({display: 'block'}) }, 100);
      setTimeout(() => { this.setState({progress: '300'}) }, 200);
    }, 2400)
  }
  render() {
    const spanStyle = {
      'font-family': 'helvetica',
      'font-size': '12px',
      color: 'black'
     }
    const divStyle = {
      display: this.state.display,
      height: '5px',
      width: this.state.progress + 'px',
      'background-color': 'black',
      transition: 'width 1.4s ease-in',
      'margin-top': '5px'
    }
    return (
      <div className='maxis-trope-loader'>
        <span className='maxis-message' style={spanStyle}>{this.state.phrase}</span>
        <div className='trope-loading-progress' style={divStyle}></div>
      </div>
    )
  }
}
