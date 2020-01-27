import React, { Component } from 'react'
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
})

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      hello : null 
    }
  }
  async componentDidMount(){
    try {
      const res = await axiosInstance.get('/posts');
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
        {this.state.hello !== null && (
        <ul>
          {this.state.hello.map( el => <li key={el.id}>{el.title}</li>)}
        </ul>)}
      </div>
    )
  }
}
