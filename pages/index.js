import {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import mapboxgl from '!mapbox-gl';
import Map from './components/Map';
import Link from 'next/link'
import {auth} from '../firebase'
import { onAuthStateChanged,signOut }  from 'firebase/auth';
import {useRouter} from 'next/router'



export default function Home() {

  const [user,setUser] = useState(null)
  const router = useRouter()

  useEffect(()=>{
    return onAuthStateChanged(auth,user =>{
      console.log(user)
      if(user){
        setUser({
          name :user.displayName,
          photoURL: user.photoURL,
        })
      }else{
        setUser(null)
        router.push('/login')
      }
    })
  },[])

  return (
   <Wrapper>
    <Map />
    <ActionItems>
    {/* Header */}
    <Header>
      <UberLogo src="./uber-logo.jpg" />
      <Profile>
        <Name>{user && user.name}</Name>
        <UserImage src={user && user.photoURL} onClick={()=> signOut(auth)} />
      </Profile>
    </Header>
    {/* ActionButtons */}
    <ActionButtons>
      <Link href="/search">
      <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
        <ActionButtonText>Ride</ActionButtonText>
      </ActionButton>
      </Link>
      <Link href="/search">
      <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
        <ActionButtonText>Wheels</ActionButtonText>
      </ActionButton>
      </Link>
      <Link href="/search">
      <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
        <ActionButtonText>Reserve</ActionButtonText>
      </ActionButton>
      </Link>
    </ActionButtons>
    {/* InputButton */}
    <InputButton>
     Where to?
    </InputButton>
    </ActionItems>
   </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const ActionItems = styled.div`
  flex: 1;
  padding:  40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
`

const UberLogo = styled.img`
 height:40px;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Name = styled.div`
  
`

const UserImage = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;

  &:hover{
    cursor: pointer;
  }
`

const ActionButtons = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  gap: 10px;
  padding-top: 30px;
`

const ActionButton = styled.div`
  background-color: #ececec;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 20px 25px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  

  &:hover{
    transform: scale(1.05);
  }
`


const ActionButtonImage = styled.img`
  height: 80px;
`

const ActionButtonText = styled.div`
  font-weight: bold;
  margin-top:5px;
`

const InputButton = styled.div`
  height: 80px;
  font-weight: bold;
  background-color:#ececec;
  margin-top: 35px;
  font-size: 20px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`