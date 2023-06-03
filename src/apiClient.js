const API_URL = 'http://localhost:8080'

export const getMoviesList =  () =>{
    return fetch(API_URL + '/movies/list')
        .then(response => response.json())
}