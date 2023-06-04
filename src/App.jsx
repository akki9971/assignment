import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import { getMoviesList } from './apiClient'

function App() {
  const [list, setList] = useState([])
  const [searchedList, setSearchedList] = useState([])
  const [searchString, setSearchString] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setErrors] = useState(null)


  useEffect(() => {
    setLoading(true)
    getMoviesList()
      .then(res => {
        // console.log(res);
        setList(res);
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
        setErrors(err)
        setLoading(false)
      })
  }, [])
  useEffect(() => {
    setLoading(true)
    const searchedList = list?.filter(e => (e.Title?.toLowerCase().includes(searchString?.toLowerCase())))
    console.log({ searchedList, list });
    setSearchedList(searchedList)
    setLoading(false)
  }, [searchString])


  return (
    <>
      <h1 className='pageTitle'>Movies List of 2022
        <span>NETFLIX</span>
      </h1>
      <div className="searchBox">
        <input
          type="text"
          value={searchString}
          onChange={(e) => { setSearchString(e.target.value) }}
          className="searchBox"
          placeholder='Search Here' />
      </div>

      <p className={`searchedString ${searchString.length > 0 ? "show" : "hide"}`}>Search results for <span style={{ borderBottom: '1px solid rgba(255, 255,255, 0.5)' }}>{searchString}</span></p>
      <div className="container">
        <div className="row">

          {
            !loading ? (
              searchString.length === 0 ? list.map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-3" key={index}>
                    <Card
                      Title={item.Title}
                      Released={item.Released}
                      imdbRating={item.imdbRating}
                      Poster={item.Images[0]}
                      uid={item.uid}
                    />
                  </div>
                )
              }) : searchedList.map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-3" key={index}>
                    <Card
                      Title={item.Title}
                      Released={item.Released}
                      imdbRating={item.imdbRating}
                      Poster={item.Images[0]}
                      uid={item.uid}
                    />
                  </div>
                )
              })
            ) : <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>Loading...</h3>
          }
        </div>

      </div>
    </>
  )
}

export default App
