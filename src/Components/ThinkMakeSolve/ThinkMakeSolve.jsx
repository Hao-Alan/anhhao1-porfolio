import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Content = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
    flex: 1;
    padding: 20px;
    scroll-snap-align: center;
  }
`;

const TextTop = styled.div`
  color: #fff;
  font-size: 5rem;
`;

const TextMiddle = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 8px 0px;
  img {
    width: 40px;
    height: 5px;
    padding-right: 10px;
  }
  .text {
    color: #da4ea2;
    font-size: 2rem;
  }
`;

const TextBottom = styled.p`
  color: gray;
  font-size: 20px;
  padding: 15px 0;
`;

const Right = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 100vh;
    flex: 1;
    scroll-snap-align: center;
  }
`;

const Image = styled.img`
  position: absolute;

  width: 400px;
  animation: hero 2s alternate infinite ease-in-out;
  @keyframes hero {
    to {
      transform: translateY(20px);
    }
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }
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
  text-align: center;
  margin: 0 auto;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const ThinkMakeSolve = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <Left>
          <TextTop>THINK MAKE SOLVE</TextTop>
          <TextMiddle>
            <img src="/image/line.png" alt="line" />
            <div className="text">I love you cạp cạp</div>
          </TextMiddle>
          <TextBottom>
            we enjoy creating delightful, human-centered digital experiences.
          </TextBottom>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls autoRotate enableZoom={false} autoRotateSpeed={2} />
            <ambientLight intensity={0.3} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 200, 200]} scale={2}>
              <MeshDistortMaterial
                color={"#8754a5"}
                distort={0.5}
                speed={2}
                attach={"material"}
              />
            </Sphere>
          </Canvas>
          <Image src="/image/moon.png" />
        </Right>
      </Content>
    </Container>
  );
};

export default ThinkMakeSolve;
