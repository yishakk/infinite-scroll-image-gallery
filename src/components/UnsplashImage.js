import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`;

export const UnsplashImage = ({ url }) => {
  return (
  <>
  <Img src={url} alt="" />

  </>

  )


}
