import React from "react";
import "./App.css";

const OneMovie = props => {
  let movieName, audienceScode, tomatometerScore;

  if (props.movieData !== undefined) {
    movieName = props.movieData.movieName;
    audienceScode = props.movieData.audienceScode;
    tomatometerScore = props.movieData.tomatometerScore;
  } else {
    movieName = "";
    audienceScode = "";
    tomatometerScore = "";
  }

  return (
    <div className="movieBox">
      <table>
        <tbody>
          <tr>
            <th>Movie name</th>
            <td>{movieName}</td>
          </tr>
          <tr>
            <th>Tomatometer Score</th>
            <td>{audienceScode}</td>
          </tr>
          <tr>
            <th>Audience Score: </th>
            <td>{tomatometerScore}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OneMovie;
