import React, {useState, useEffect} from 'react'
import RoomCard from './RoomCard.js'
import { Link} from 'react-router-dom'


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(()=> {
        const fetchData = async () => {
            const data = await window.fetch('/api/rooms')  
            const json = await data.json()
            console.log(json)
            setRooms(json)
        }
        fetchData()
        
    }, [])
    return (
     <div>
         {rooms.map(room => (
             <Link key={room._id} to={room._id}>
                <RoomCard room={room}></RoomCard>
             </Link>
         ))}
     </div>
     
    )
  }
  
  export default Rooms;