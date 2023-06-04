import React from 'react'

const Card = ({ Title, Released, imdbRating, Poster }) => {

    const array = Array.apply(null, { length: (parseInt(parseFloat(imdbRating) / 2)) })
    return (
        <div className="card">
            <img src={Poster} className="card-img" alt={Title} />
            <div className="card-body">
                <h5 className="card-title">Title: {Title}</h5>
                <h6 className="card-title">Released at: {Released}</h6>
                <p className="card-text">IMDB Reatings: {imdbRating}/10 &nbsp;&nbsp;&nbsp;
                    {
                        array.map(() => {
                            return <img className="star-icon" src="/icon-star.png" alt="rating" />
                        })

                    }
                </p>
                <a href="#" className="btn btn-primary">View Details</a>
            </div>
        </div>
    )
}

export default Card