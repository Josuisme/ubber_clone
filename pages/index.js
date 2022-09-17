import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'

export default function Home() {

  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        <Header>
          <UberLogo src="https://1000marcas.net/wp-content/uploads/2020/10/Uber-Logo.png" />
          <Profile>
                <Name>Programer</Name>
                <Link href="/login">
                <UserImage src="https://d2k7w3fmrpj0w4.cloudfront.net/advices/photos/000/000/798/medium/999c58e98401e287626190d3aff58c48d3411610.jpg?1642017136"/>
                </Link>
              </Profile>
        </Header>
        
        <ActionButtons>
          <Link href="/search">
          <ActionButton>
          <ActionButtonImage src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1155,h_650/f_auto,q_auto/products/carousel/UberX.png'/>
            Ride
          </ActionButton>
          </Link>
          <ActionButton>
          <ActionButtonImage src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png'/>
            Wheels
          </ActionButton>
          <ActionButton>
          <ActionButtonImage src='https://icon-library.com/images/reservation-icon/reservation-icon-19.jpg'/>
            Reserve
          </ActionButton>

        </ActionButtons>
        <InputButton>
        Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>  
  )
}

const Wrapper= tw.div
`flex flex-col bg-white h-screen
`
const ActionItems=tw.div
`
flex-1 p-4
`
const Header=tw.div
`
flex justify-between items-center
`

const UberLogo= tw.img
`
h-28
`
const Profile=tw.div
`
flex items-center
`
const Name=tw.div
`
mr-4 w-20 text-lg
`
const UserImage=tw.img
`
h-12 w-12 rounded-full border border-gray-200 p-px  cursor-pointer
`
const ActionButtons=tw.div
`
flex
`
const ActionButton=tw.div 
`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage=tw.img
`
h-3/5
`
const InputButton=tw.div
`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`