import { useEffect, useState } from "react"
import tw from "tailwind-styled-components"
import Map from './components/Map'
import {useRouter} from 'next/router'
import RideSelector from "./components/RideSelector"
import Link from "next/link"


const Confirm = () => {
    const router=useRouter()
    const {pickup,dropoff}=router.query

    const [pickupCoordinates,setPickupCoordinates]=useState([0,0]) //theget and theset
    const [dropoffCoordinates,setDropoffCoordinates]=useState([0,0])

    const getPickupCoordinates=(pickup)=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + new URLSearchParams({
            access_token:'pk.eyJ1Ijoiam9zdW1hcCIsImEiOiJja2M2ajJtbWMwODJsMnNxdHg1b2szMzNiIn0.3Q-WWq6dKjuwtZ_67CUnAQ',limit:1
        }))
        .then(response=>response.json())
        .then(data=>{
            setPickupCoordinates(data.features[0].center)
        })
    }
    const getDropoffCordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + new URLSearchParams({
            access_token:'pk.eyJ1Ijoiam9zdW1hcCIsImEiOiJja2M2ajJtbWMwODJsMnNxdHg1b2szMzNiIn0.3Q-WWq6dKjuwtZ_67CUnAQ',limit:1
        }))
        .then(response=>response.json())
        .then(data=>{
            console.log("Dropoff")
            console.log(data.features[0].center )
            setDropoffCoordinates(data.features[0].center)

        })

    }

    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropoffCordinates(dropoff);
    },[pickup,dropoff])

    console.log(pickupCoordinates)

  return (
    <Wrapper>
        <ButtonContainer>
        <Link href="/search">
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </Link>
        </ButtonContainer>

        <Map
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
        />
        <RideContainer>
        <RideSelector
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
            <ConfirmButton>
            Confirm Uber
            </ConfirmButton>
        </ConfirmButtonContainer>
        </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper=tw.div
`
flex h-screen flex-col
`
const RideContainer=tw.div
`
flex-1 bg-gray-100 flex flex-col h-1/2
`
const ConfirmButtonContainer=tw.div
`
border-t-2
`
const ConfirmButton=tw.div
`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const BackButton=tw.img
`
h-full object-contain

`
const ButtonContainer=tw.div
`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`