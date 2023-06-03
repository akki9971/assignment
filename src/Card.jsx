import React from 'react'

const Card = ({ Title, Released, imdbRating, Poster}) => {
  return (
      <div className="card">
          <img src={Poster} className="card-img" alt={Title} />
            <div className="card-body">
                <h5 className="card-title">Title: {Title}</h5>
            <h6 className="card-title">Released at: {Released}</h6>
                <p className="card-text">IMDB Reatings {imdbRating}/10 </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
      </div>
  )
}

export default Card