import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media screen and(max-width:768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 0 auto;

  @media screen and(max-width:768px) {
    width: 100%;
  }
`;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  padding: 0 15px;
  cursor: pointer;
  &:hover {
    color: yellow;

    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SearchLogo = styled.img`
  width: 25px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
`;
const Button = styled.button`
  padding: 8px 15px;
  background-color: #da4ea2;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #da4ea2;
  margin-left: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Logo src="/image/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Left>
        <Right>
          <SearchLogo src="/image/search.png" />
          <Button>Hire Now</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Navbar;
