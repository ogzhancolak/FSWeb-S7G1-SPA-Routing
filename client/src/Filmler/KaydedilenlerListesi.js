import React from 'react';
import { NavLink } from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
  const { list, movieList } = props;
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {list.map(id => {
        const movie = movieList.find(movie => movie.id === id);
        return (
          <NavLink
            key={id}
            to={`/filmler/${id}`}
            activeClassName="saved-movie-active"
          >
            <span className="saved-movie">
              {movie ? movie.title : ""}
            </span>
          </NavLink>
        );
      })}
      <NavLink to="/" activeClassName="home-button-active">
        <div className="home-button">Anasayfa</div>
      </NavLink>
    </div>
  );
}