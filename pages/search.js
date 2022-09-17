import {useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'


const Search = () => {
    const [pickup,setPickup]=useState("")
    const [dropoff,setdropoff]=useState("")

  return (
    <Wrapper>
        <ButtonContainer>
        <Link href="/">
            <BackButton src="https://cdn-icons-png.flaticon.com/512/109/109618.png"/>
        </Link>

        </ButtonContainer>
        <InputContainer>
            <FromToIcons>
                <Circle src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Circle_Davys-Grey_Solid.svg/1200px-Circle_Davys-Grey_Solid.svg.png"></Circle>
                <Line src="https://www.i2symbol.com/images/text-symbols/line-symbol.png"></Line>
                <Square src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/1200px-Square_gray.svg.png"></Square>


                
            </FromToIcons>
            <InputBoxes>        
            <Input 
            placeholder="Enter pickup location"
            vale={pickup}
            onChange={(e)=> setPickup(e.target.value)}

            />
            <Input 
            placeholder="Where to?"
            vale={dropoff}
            onChange={(e)=> setdropoff(e.target.value)}
            />
            </InputBoxes>
            <PlusButton src="https://static.thenounproject.com/png/4388932-200.png"/>
        </InputContainer>
        <SavedPlaces>
            <StarIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Black_star.png/802px-Black_star.png"/>
            Saved Places
        </SavedPlaces>
        <Link href={{
            pathname:"/confirm",
            query:{
                pickup:pickup,
                dropoff:dropoff}
            }}>

        <ConfirmLocation>
            Confirm Locations
        </ConfirmLocation>
        </Link>

    </Wrapper>
  )
}

export default Search

const Wrapper= tw.div
`
bg-gray-200 h-screen
`
const ButtonContainer=tw.div
`
bg-white px-4
`
const BackButton=tw.img
`
h-12 cursor-pointer
`
const InputContainer=tw.div
`
bg-white flex items-center px-4 mb-2
`
const FromToIcons=tw.div
`
w-10 flex flex-col items-center
`
const Circle=tw.img
`
h-2.5
`
const Line=tw.img
`
h-10
`
const Square=tw.img
`
h-3
`
const InputBoxes=tw.div
`
flex flex-col flex-1
`
const Input=tw.input
`
h-10 bg-gray-200  my-2 rounded-2 p-2 outline-none border-none ml-2
`
const PlusButton=tw.img
`
h-12 ml-3 cursor-pointer
`
const SavedPlaces=tw.div
`
flex items-center bg-white px-4 py-2
`
const StarIcon=tw.img
`
h-10 bg-gray-400 p-2 rounded-full mr-2
`
const ConfirmLocation=tw.div
`
bg-black m-5 p-3  rounded-2 text-white text-center text-xl cursor-pointer
`