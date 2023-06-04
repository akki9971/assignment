import React from 'react'
import {Routes, Route} from 'react-router-dom'
import App from './App'
import MovieSingle from './MovieSingle'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movies/:uid" element={<MovieSingle />} />
        <Route path="*" element={<div> Not Found</div>} />
    </Routes>
  )
}

export default Routing