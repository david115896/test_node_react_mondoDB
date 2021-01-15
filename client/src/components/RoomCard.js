import React from 'react';
import {Card, Badge} from 'antd'
const {Meta} = Card

const RoomCard = ({room}) => {

    
    return (
        <div style={{ width: 300, margin: '1rem'}}>
            <Badge count='Best price'>
                <Card 
                cover={
                    <img 
                    style={{
                        width: '300px',
                        height: '350px',
                        objectFit: 'cover'
                    }}
                    alt={room.name}
                    src={`https://source.unsplash.com/random/${Math.ceil(Math.random()*1000+300)}x350/?bed`} ></img>
                }
                
            >   
            <Meta title={room.name.toUpperCase()} description={`Max personnes : ${room.maxPersons}`}></Meta> 
            </Card>
            </Badge>
            
        </div>
       
    )
    
}
 
export default RoomCard