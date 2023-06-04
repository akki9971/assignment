import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from './apiClient';
import { Link } from 'react-router-dom'


function MovieSingle() {
    const params = useParams();
    const [movie, setMovie] = useState()

    console.log(params.uid);
    useEffect(() => {
        const { uid } = params
        getMovieDetails(uid)
            .then((res) => {
                console.log(res);
                setMovie(res[0])
            })
            .catch(err => {
                alert(err, "bad request")
            })
    },[])
    return (
        <>
            <Link to="/" className="btn btn-success " style={{position:"absolute", right:"1em", top:'1em'}} >GO Back</Link>
            <h2 className="pageTitle text-center">Title: {movie?.Title}</h2>
            <div class="text-center">
                {
                    movie?.Images?.map((e,i)=>{
                        return <img key={i} src={e} class="rounded img-fluid img-thumbnail m-3" alt={"image "+i} width={"30%"} />
                    })
                }
            </div>
        </>
    )
}

export default MovieSingle