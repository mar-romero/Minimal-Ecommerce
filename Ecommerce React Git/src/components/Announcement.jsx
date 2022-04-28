import React from 'react'
import styled from "styled-components";


const Container = styled.div`
  height: 30px;
  background-color:#F1C0E8;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  opacity:0.5;
`;

const Announcement = () => {
  return (
    <Container>
        Oferta HOT SALE
    </Container>
  )
}

export default Announcement