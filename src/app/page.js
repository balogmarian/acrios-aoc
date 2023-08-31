"use client"

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  height: 100%;
  weight: 100%;
`;

const Header = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin: 25px 0;
  color: #1565c0;
`;

const StyledLink = styled(Link)`
  margin: 20px;
  color: #64b5f6;
  &:hover{ 
    color: #1565c0;
    text-decoration: none;
  }
`;

const Footer = styled.div`
  color: #1565c0;
  padding: 20px;
  font-size: 8px;
  text-align: center;
`;


const Home = () => {
  return (
    <main>
      <Wrapper>
        <Image
          src="/favicon.ico"
          width={30}
          height={30}
          alt="Back to home"
        />
        <Header>
        Acrios Systems s.r.o. - 1. kolo pohovoru - Marian Balog
        </Header>

        <StyledLink href="day1">
          Day 1 - Sonar Sweep
        </StyledLink>

        <Footer> Created by Marian Balog</Footer>
      </Wrapper>
    </main>
  )
};

export default Home;
