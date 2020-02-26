import React, { Component } from "react";
import NameFilter from "./components/NameFilter";
import Starrating from "./components/starrating";
import MovieCard from "./components/MovieCard";
import Modal from "./components/Modal";
import WithLoading from './components/withLoding';
import "./App.css";

const movies = [
  {
    src: "http://bit.do/fmnrS",
    title: "Venom",
    date: "2019",
    rate: 5
  },
  {
    src: "http://bit.do/fmnsr",
    title: "Star Wars",
    date: "2017",
    rate: 5
  },
  {
    src: "http://bit.do/fmnaL",
    title: "I am Legend",
    date: "2007",
    rate: 4
  },
  {
    src: "http://bit.do/fmnuw",
    title: "In the tall grass",
    date: "2019",
    rate: 3
  }
];
const ListWithLoading = WithLoading(MovieCard);
export default class App extends Component {
  state = {
    movieList: movies,
    input: "",
    rate: 1
  };

  componentDidMount() {
    this.setState({ loading: true });
       setTimeout (()=>this.setState({ loading: false }),4000);
      
  }
  addMovie = newMovie => {
    this.setState({ movieList: [...this.state.movieList, newMovie] });
  };

  handelSearch = newValue => {
    this.setState({ input: newValue });
  };
  onChangeRating = newRate => {
    this.setState({ rate: newRate });
  };
  

  render() {
    return (
      <div className="movie-app">
        <div className="navmenu">
          <NameFilter
            handelSearch={this.handelSearch}
            handelFilter={this.handelFilter}
          />
          <div className="rating-filter">
            <h5>Minimum rating</h5>
            <Starrating
              onChangeRating={this.onChangeRating}
              rate={this.state.rate}
            />
          </div>
        </div>
        <div >
        <ListWithLoading isLoading={this.state.loading} movies={this.state.movieList.filter(
              el =>
                el.title
                  .toLowerCase()
                  .includes(this.state.input.toLowerCase().trim()) &&
                el.rate >= this.state.rate)}  />
          {/* // <MovieCard
          //   movies={this.state.movieList.filter(
          //     el =>
          //       el.title
          //         .toLowerCase()
          //         .includes(this.state.input.toLowerCase().trim()) &&
          //       el.rate >= this.state.rate
          //   )}
          // /> */}

          <Modal movie={this.addMovie} />
        </div>
      </div>
    );
  }
}
