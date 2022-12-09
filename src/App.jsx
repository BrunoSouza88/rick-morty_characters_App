// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  getApi = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({
          characters: data.results
        })
      })
  }

  componentDidMount() {
    this.getApi()
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map((element) => {
            return (
              <div className="container" key={element.id}>
                <h3>{element.name}</h3>
                <img src={element.image} alt={element.name} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
