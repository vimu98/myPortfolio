import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #30055e;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 15px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;



const Contact = () => {
  const form = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i2tuhwy",
        "template_3cqska5",
        form.current,
        "vEyHMPA_5mnnLhH8B"
      )
      .then(
        (result) => {
          alert("Message Sent");
          form.current.result();
        },
        (error) => {
          alert(error);
        }
      );
  };
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm onSubmit={handelSubmit}>
          <ContactTitle>Email   &emsp; : ictthimira@gmail.com</ContactTitle>
          <ContactTitle>Phone&emsp; : +94 75 1767818 / +94 70 1767818</ContactTitle>
          <ContactTitle>Address : No.273/2, Wijemanna MV, Kaluthara North,<br/>&emsp;&emsp;&emsp;&emsp;&emsp;Western Srilanka,<br/>&emsp;&emsp;&emsp;&emsp;&emsp;12000</ContactTitle>

        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
