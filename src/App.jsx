import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import { getMoviesList } from './apiClient'

function App() {
  const [list, setList] = useState([])
  const [searchString, setSearchString] = useState('')
  const [error, setErrors] = useState(null)
  

  useEffect(()=>{
    getMoviesList()
      .then(res=>{
        // console.log(res);
        setList(res);

      })
      .catch(err=>{
        console.log(err);
        setErrors(err)
      })
  },[])


  return (
    <>
      <h1 className='border-bottom mb-2'>Movies List of 2022</h1>
      <div className="container">
        {
          list.map((item, index) => {
            return (
              <div className="column">
                <Card
                  Title={item.Title}
                  Released={item.Released}
                  imdbRating={item.imdbRating}
                  Poster={item.Images[0]}
                />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
