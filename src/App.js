import React, { Component } from 'react';
import axios from 'axios';
import { Movie } from './Movie';

class App extends Component {

  state = {
    isLoading: true,
    movies: []
  }

  getMoives = async () => {
    const movies = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies: movies.data.data.movies, isLoading: false});
  }

  async componentDidMount() {
    this.getMoives();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="App">
        {isLoading ? "Loading..." : movies.map(movie => {
          return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
        })}
      </div>
    );
  }
}

export default App;
