import React from 'react'
import {useEffect} from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import {signInWithPopup, onAuthStateChanged} from 'firebase/auth'
import {auth,provider} from '../firebase'


const Login = () => {

const router = useRouter()

useEffect(()=>{
    onAuthStateChanged(auth,user =>{
        if (user){
            router.push('/')
        }
    })
},[])
      

  return (
    <Wrapper>
        <UberLogo src='https://i.ibb.co/ZMhy8ws/uber-logo.png' />
        <Title>Log in to access your account</Title>
        <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
        <SignInButton onClick={()=>signInWithPopup(auth,provider)}>
            Sign in with Google
        </SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ececec;
    height: 100vh;
    padding: 20px;
`

const SignInButton = styled.button`
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 15px 0;
    margin-top: 30px;
    width: 100%;
    cursor: pointer;
    font-size: 16px;
`

const UberLogo = styled.img`
    height: 100px;
    align-self: flex-start;
    object-fit: contain;
`

const Title = styled.div`
    font-size: 38px;
    color: #646464;
`

const HeadImage = styled.img`

`