import React from 'react'
import Layout from './components/Layout'
import { Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage.js'
import RoomsPage from './pages/RoomsPage.js'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/rooms/*' element={<RoomsPage/>}> </Route>
        <Route path='/about' element={<h1>About</h1>}> </Route>
        <Route path='/contact' element={<h1>Contact</h1>}> </Route>
        <Route path='*' element={<h1>Not found 404</h1>}> </Route>

      </Routes>
    </Layout>
   
  )
}

export default App;
