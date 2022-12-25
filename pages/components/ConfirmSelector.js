import React from 'react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { carList } from '../data/carList'


const ConfirmSelector = ({pickupCoordinates,dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0) 

    // get ride duration from mapbox api
    useEffect(()=>{
      fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoidmdkZXY3NyIsImEiOiJjbGJ6aXFxaTcxMHE1M3JvNTEwZm5iM3J3In0.r32wJU90OaW68eklBF68IQ",
            })
        )
      .then(response => response.json())
      .then(data =>{
        setRideDuration(data.routes[0].duration / 100)
      })
      .catch(error => {
       console.error(error)
       })
    },[pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
      <Title>
        Choose a ride, or swipe up for more
      </Title>
      <CarList>
        {carList.map((car,index)=>(
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{'$'+ (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  )
}

export default ConfirmSelector

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color:#fff;
  overflow-y: scroll;
`

const Title = styled.div`
background: #fff;
  color: grey;
  text-align: center;
  font-size: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #ececec;
`

const CarList = styled.div`
  overflow-y: scroll;
`
const Car = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
`

const CarImage = styled.img`
  width: 50px;
  margin-right: 12px;
`

const CarDetails = styled.div`
  flex: 1;
`

const Service = styled.div`
  font-size: 16px;
  font-weight:bold;
`

const Time = styled.div`
  font-size: 12px;
  color: blue;
`

const Price = styled.div`
  font-size: 13px;
  font-weight:bold;
`