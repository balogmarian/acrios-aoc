"use client";

import React, { useState } from "react";
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

const Footer = styled.div`
  color: #1565c0;
  padding: 20px;
  font-size: 8px;
  text-align:center;
`;

const StyledButton = styled.button`
  border: 1px solid #64b5f6;
  color: #64b5f6;
  padding: 10px 20px;
  font-weight: 600;
  background-color: #eceff1;
  border-radius: 0.5rem;
  font-size: 18px;
  box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
`;

const ShowData = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  justify-content: space-around;
`;

const Largest = styled.div`
  color: #64b5f6;
  font-weight: 600;
  border-bottom: 2px solid #64b5f6;
`;

const StyledSum = styled.i`
  color: #64b5f6;
  font-size: 20px;
  font-weight: 800;
`;

const generateNumbers = () => {
  let numbers = [];

  for (let i = 0; i < 20; i++) {
    numbers.push(Math.floor(Math.random() * 1000));
  }

  return numbers;
};

const SonarSweep = () => {
  const [gen, setGen] = useState(false);

  let count = 0;
  const sonarReport = generateNumbers();

  const showReport = () => {
    const report = sonarReport.map((value, index) => {
      if (index > 0 && sonarReport[index - 1] < value) {
        count = count + 1;
        return <Largest key={index}>{value}</Largest>;
      } else {
        return <div key={index}>{value}</div>;
      }
    });
    return report;
  };

  const handleClick = () => {
    setGen(!gen);
  };

  const fakeData = showReport();
  return (
    <Wrapper>
      <Link href="/">
        {" "}
        <Image src="/favicon.ico" width={30} height={30} alt="Back to home" />
      </Link>
      <Header>Sonar Sweep</Header>

      <Actions>
        {gen && (
          <div>
            {" "}
            The sum of measurements more than the previous measurement is{" "}
            <StyledSum>{count}</StyledSum>
          </div>
        )}
        <StyledButton onClick={handleClick}>
          {gen ? "New" : "Generate and Sum measurement"}
        </StyledButton>
      </Actions>
      {gen && <ShowData>{fakeData}</ShowData>}

      <Footer> Created by Marian Balog</Footer>
    </Wrapper>
  );
};

export default SonarSweep;
