import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { DisappearedLoading } from 'react-loadingg';

function WithLoading(MovieCard) {
  return function WihLoadingMovieCard({ isLoading,...props }) {
    if (!isLoading) return (<MovieCard {...props} />);
    return <div className="spinner"><DisappearedLoading/>
  </div>}
}
export default WithLoading;