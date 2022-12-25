import React from 'react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Map from './components/Map'
import ConfirmSelector from './components/ConfirmSelector'
import { useRouter } from 'next/router'


const Confirm = () => {

  // useRouter
  const router = useRouter()
  const {pickup, dropoff} = router.query

  console.log("pickup", pickup);
  console.log("dropoff", dropoff);

  // useState hooks
  const [pickupCoordinates, setPickupCoordinates ] = useState([0,0])
  const [dropoffCoordinates, setDropoffCoordinates ] = useState([0,0])

  // Pickup
  const getPickupCoordinates = (pickup) =>{
    // const pickup = "Los Angeles"
    // Fetch function
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
      new URLSearchParams({
        access_token: "pk.eyJ1IjoidmdkZXY3NyIsImEiOiJjbGJ6aXFxaTcxMHE1M3JvNTEwZm5iM3J3In0.r32wJU90OaW68eklBF68IQ",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      // The data with useState
      setPickupCoordinates(data.features[0].center);
    })
  }

  // Dropoff
  const getDropoffCoordinates = (dropoff) =>{
    // const dropoff = 'Miami'
    // Fetch function
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
      new URLSearchParams({
        access_token: "pk.eyJ1IjoidmdkZXY3NyIsImEiOiJjbGJ6aXFxaTcxMHE1M3JvNTEwZm5iM3J3In0.r32wJU90OaW68eklBF68IQ",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      // The data with useState
      setDropoffCoordinates(data.features[0].center);
    })
  }

  // Run the functions with useEffect 
  useEffect(()=>{
    getDropoffCoordinates(pickup)
    getPickupCoordinates(dropoff)
  },[pickup, dropoff])

 

  return (
    <Wrapper>
      <Link href="/search">
        <BackButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"></BackButton>
        </BackButtonContainer>
      </Link>
      <Map 
      pickupCoordinates={pickupCoordinates} 
      dropoffCoordinates={dropoffCoordinates}        
      />
      <ConfirmContainer>
        <ConfirmSelector
          pickupCoordinates={pickupCoordinates} 
          dropoffCoordinates={dropoffCoordinates}   
        />
        <ConfirmButtonContainer>
          <ConfirmButton>
            Confirm UberX
          </ConfirmButton>
        </ConfirmButtonContainer>
      </ConfirmContainer>
    </Wrapper>
  )
}

export default Confirm


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const ConfirmContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 50%;
`


const ConfirmButtonContainer = styled.div`
  border-top: 1px solid #ececec;
  
`

const ConfirmButton = styled.div`
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  padding: 15px 0;
  margin: 15px 20px;
  cursor: pointer;
`

const Link = styled.a`

`
const BackButtonContainer = styled.div`
  position: relative;
`

const BackButton = styled.img`
  width: 40px;
  position: absolute;
  z-index: 99;
  top: 15px;
  left: 15px;
  background-color: #fff;
  border-radius: 50%;
`