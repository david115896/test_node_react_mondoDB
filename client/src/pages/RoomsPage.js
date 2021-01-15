import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Rooms from './../components/Rooms.js'
import Room from './../components/Room.js'

const RoomsPage = () => {
    return (
     <Routes>
            <Route path='/' element={<Rooms/>}> </Route>
            <Route path=':id' element={<Room/>}> </Route>
     </Routes>
     
    )
  }
  
  export default RoomsPage;

  //<Route path=':id' element={<h2>Room</h2>}> </Route>