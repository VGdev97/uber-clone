import React from 'react'
import {useEffect} from 'react'
import styled from 'styled-components'
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidmdkZXY3NyIsImEiOiJjbGJ6aXFxaTcxMHE1M3JvNTEwZm5iM3J3In0.r32wJU90OaW68eklBF68IQ';

const Map = (props) => {

  useEffect(()=>{
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph', // style URL
    center: [-99.29011, 39.39172], // starting position [lng, lat]
    zoom: 9, // starting zoom
  })

  if(props.pickupCoordinates){
    addToMap(map, props.pickupCoordinates)
  }

  if(props.dropoffCoordinates){
    addToMap(map, props.dropoffCoordinates)
  }

  if(props.pickupCoordinates && props.dropoffCoordinates){
    map.fitBounds([
      props.pickupCoordinates,
      props.dropoffCoordinates
    ],{
      padding: 60
    })
  }

  },[props.dropoffCoordinates, props.pickupCoordinates]);

  const addToMap = (map, coordinates) =>{
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }


  return (
    <Wrapper id='map' />
  )
}

export default Map

const Wrapper = styled.div` 
  flex:1;
  height: 50%;
`