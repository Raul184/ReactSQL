import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      hello : null 
    }
  }
  async componentDidMount(){
    try {
      const res = await axios.get('http://localhost:5000/hello');
      this.setState({
        hello: res.data
      })   
    } 
    catch (error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      <div>
        {this.state.hello !== null && <h1>{this.state.hello}</h1>}
      </div>
    )
  }
}
