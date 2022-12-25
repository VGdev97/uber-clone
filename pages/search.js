import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Search = () => {

    const [pickup, setPickup] = useState()
    const [dropoff, setDropoff] = useState()

    console.log(pickup)
    console.log(dropoff)

  return (
    <Wrapper>
        {/* Button Container */}
        <ButtonContainer>
            <Link href="/">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"></BackButton>
            </Link>
        </ButtonContainer>
        {/* Input Container */}
        <InputContainer>
            <FromToIcons>
                <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                <Square src="/icons8-square-full-32.png" />
            </FromToIcons>
            <InputBoxes>
                <Input 
                placeholder='Enter pickup location' 
                value={pickup}
                onChange={(e)=>setPickup(e.target.value)}
                 />
                <Input
                placeholder='Where to?'
                value={dropoff} 
                onChange={(e) =>setDropoff(e.target.value)}
                />
            </InputBoxes>
            <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
        </InputContainer>
        {/* Saved Places */}
        <SavedPlaces>
            <StartIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
            Saved Places
        </SavedPlaces>
        {/* Comfirm Location */}
        <Link href={{
            pathname: "/confirm",
            query: {
                pickup: pickup,
                dropoff: dropoff 
            }
        }}>
            <ComfirmButton>
                <Button>Confirm locations</Button>
            </ComfirmButton>
        </Link>
    </Wrapper>
  )
}

export default Search

const Wrapper = styled.div`
    background-color: #ececec;
    min-height: 100vh;
`

const ButtonContainer = styled.div`
    background-color: #fff;
    padding: 0 20px;
`

const BackButton = styled.img`
    height: 50px;;
`

const InputContainer = styled.div`
   background-color: #fff;
   display: flex;
   align-items: center;
   gap: 20px;
   padding: 15px 25px;
`

const FromToIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
`

const Circle = styled.img`
    height: 10px;
`

const Line = styled.img`
    height: 40px;
`

const Square = styled.img`
    height: 15px;
`

const InputBoxes = styled.div`
 display: flex;
 flex-direction: column;
 flex: 1;
 gap: 20px;
`

const Input = styled.input`
    height: 35px;
    background-color: #ececec;
    border: none;
    border-radius: 10px;
    padding: 5px 15px;

    &:focus{
        outline: 0;
    }
`

const PlusIcon = styled.img`
    background-color: #ececec;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
    cursor: pointer;
`

const SavedPlaces = styled.div`
    padding: 10px 25px;;
    margin-top: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #fff;
`

const StartIcon = styled.img`
    background-color: #c6c6c6;
    width: 35px;
    height: 35px;
    padding: 5px;
    border-radius: 50%;
`

const ComfirmButton = styled.div`
    margin: 10px 25px 0 25px;
`

const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    padding: 12px 0;
    font-size: 18px;
    cursor: pointer;
`