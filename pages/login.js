import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import {signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import {auth,provider} from '../firebase'
import Link from 'next/link'

const Login = () => {
  const router =useRouter()
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if (user) {
       router.push('/') 
      }
    })
  },[])
  return (
    <Wrapper>
    <Link href="/">
      <UberLogo src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png"/>
    </Link>

      <Title>
        Log in to access your account
      </Title>

      <HeadImage src="https://hd2.tudocdn.net/1021270?w=1920"/>

      <SingInButton onClick={()=>signInWithPopup(auth,provider)}>
      Sign in with Google
      </SingInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper=tw.div
`
flex flex-col h-screen w-screen bg-gray-200 p-4
`
const SingInButton=tw.button
`
bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`
const UberLogo=tw.img
`
h-8 w-auto object-contain self-start cursor-pointer
`
const Title=tw.div
`
text-5xl pt-4 text-gray-500
`
const HeadImage=tw.img
`
object-contain w-full mix-blend-multiply
`