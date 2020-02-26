import React, { Component } from "react";
import Starrating from "./starrating";

export default class movielist extends Component {
  onChangeRating = newRate => {
    
  };
  render() {
    return (
      <div className="moviecard">
        {this.props.movies.map(el => (
          <div className="mapmovie">
            <Starrating rate={el.rate} onChangeRating={this.onChangeRating}  />
            <img src={el.src} width="200" height="300" alt=""></img>
            <h3>{el.title}</h3>
            <p>{el.date}</p>
          </div>
          
        ))}
         
      </div>
    );
  }
}
