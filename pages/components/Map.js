import React from 'react'
import { useEffect } from 'react';

import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zdW1hcCIsImEiOiJja2M2ajJtbWMwODJsMnNxdHg1b2szMzNiIn0.3Q-WWq6dKjuwtZ_67CUnAQ';


const Map = (props) => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: 'map', // container ID
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph', // style URL
          center: [-99.29011, 39.39172], // starting position [lng, lat]
          zoom: 9, // starting zoom
          projection: 'globe' // display the map as a 3D globe
          })
          if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates)
          }
          if (props.dropoffCoordinates) {
            addToMap(map,props.dropoffCoordinates)
          }
          if (props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates
            ], {
                padding:60
            })
          }

      },[props.pickupCoordinates,props.dropoffCoordinates])
      const addToMap=(map,coordinates)=>{
        const marker1 = new mapboxgl.Marker(map)
        .setLngLat(coordinates)
        .addTo(map)
    }
  return (
    <Wrapper id='map'></Wrapper>)
}

export default Map
const Wrapper = tw.div
`
flex-1 h-1/2
`