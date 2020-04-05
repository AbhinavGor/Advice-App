import React from 'react';
import axios from 'axios'

import './App.css';

class App extends React.Component{
  state = {advice: '', }

  componentDidMount(){
    this.fetchAdvice();
    
  }

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const {advice} = response.data.slip;

        this.setState({advice: advice});
      })
      .catch((error) =>{
        console.log(error)
      });
  }

  render(){
    return(
      <div className='app'>
        <div className = 'card'>
          <h1 className = 'heading'>{this.state.advice}</h1>
          <button onClick = {this.fetchAdvice}><span>give me more advice!</span></button>
        </div>
        <div className = "contact">
          <h3 className = "heading"><a href = 'https://abhinavgor.netlify.com/'>Contact Me</a></h3>
        </div>
      </div>
    );
  }
}

export default App;
