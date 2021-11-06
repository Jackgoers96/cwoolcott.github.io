// To extend the capabilities of React's built in Component class, we have to import it with React
import React, { Component } from 'react';
import ResultList from './ResultList';
import search from '../utils/API';

// We instantiate our class by extending Component
class SearchResultContainer extends Component {
  // In class based components, state is declared as an object with its initial values
  state = {
    search: '',
    results: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  // This is known as a React lifecycle method
  componentDidMount() {
    this.searchGiphy('kittens');
  }

  // This helper function uses the `search` axios method from our utils folder
  // Search is responsible for preforming the GET request to the Giphy API
  searchGiphy = (query) => {
    search(query)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };

  // When dealing with classes we must remember to refer to all methods and properties with the `this` keyword
  render() {
    return (
      <div>
        {/* We pass the list of results to the ResultsList component */}
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
