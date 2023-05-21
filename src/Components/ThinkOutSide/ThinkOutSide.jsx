import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../Cube";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TextTop = styled.div`
  color: #fff;
  font-size: 5rem;
  padding: 20px;
`;

const TextMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 8px 0px;
  img {
    width: 40px;
    height: 5px;
    padding-right: 10px;
  }
  .text {
    color: #da4ea2;
    font-size: 2rem;
    justify-content: center;
  }
`;

const TextBottom = styled.p`
  color: gray;
  font-size: 20px;
  padding: 15px 0;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #da4ea2;
  width: 150px;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #da4ea2;
  cursor: pointer;
  font-weight: bold;
  margin: 0 auto;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const ThinkOutSide = () => {
  return (
    <Container>
      <Left>
        <Canvas camera={{ fov: 25, position: [8, 8, 8] }}>
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={2}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
        </Canvas>
      </Left>
      <Right>
        <TextTop>Think outside the square space.</TextTop>
        <TextMiddle>
          <img src="/image/line.png" alt="line" />
          <div className="text">Who we Are</div>
        </TextMiddle>
        <TextBottom>
          a creative group of designers and developers with a passion for the
          arts.
        </TextBottom>
        <Button>See our work</Button>
      </Right>
    </Container>
  );
};

export default ThinkOutSide;
