import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "../Map/Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 15px; */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: white;
  font-weight: 100;
  @media screen and (max-width: 786px) {
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin-left: auto;
  gap: 20px;

  @media screen and (max-width: 786px) {
    width: 300px;
    margin: auto;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
`;

const Button = styled.button`
  padding: 18px 15px;
  background-color: #da4ea2;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #da4ea2;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const Noti = styled.p`
  color: #da4ea2;
`;

const Right = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4mch308",
        "template_ca194fp",
        ref.current,
        "_t1KyF-8Kcn54FOV6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input type="text" placeholder="Name" name="name" />
            <Input type="text" placeholder="Email" name="email" />
            <Input type="text" placeholder="name2" name="name2" />
            <TextArea placeholder="write your email" rows="10" name="message" />
            <Button type="submit">Send</Button>
            {success && (
              <Noti>
                Thanks for your message, we will get back to you as soon as
                possible.
              </Noti>
            )}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
