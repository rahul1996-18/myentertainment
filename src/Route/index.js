import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HeaderComponents from '../Components/Header'
import DetailContainer from '../Container/Details'
import HomeContainer from '../Container/Home'
import MoviesContainer from '../Container/Movies/Index'
import SearchContainer from '../Container/Search'

const RouterContainer = () => {
  return (
    <>
    <BrowserRouter>
    <HeaderComponents/>
    <Routes>
        <Route path="/"element={<HomeContainer/>}/>
        <Route path='/movies'element={<MoviesContainer/>}/>
        <Route path='/search' element={<SearchContainer/>}/>
        <Route path='/details/:movieid/:mediatype' element={<DetailContainer/>}/>
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default RouterContainer
