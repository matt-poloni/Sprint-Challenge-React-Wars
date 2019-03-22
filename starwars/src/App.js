import React, { Component } from 'react';
import './App.css';
import CharList from './components/CharList';
import PageNav from './components/PageNav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextChars: null,
      prevChars: null,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          nextChars: data.next,
          prevChars: data.previous,
        });
      })
      .catch(err => {
        throw new Error(err);
      })
  };

  render() {
    const prevBtn = this.state.prevChars === null ? '' :
      <PageNav
        text="Previous"
        onClick={() => this.getCharacters(this.state.prevChars)}
      />;
    const nextBtn = this.state.nextChars === null ? '' :
      <PageNav
        text="Next"
        onClick={() => this.getCharacters(this.state.nextChars)}
      />;

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="wrap-pagenav">
          {prevBtn}
          {nextBtn}
        </div>
        <CharList list={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
