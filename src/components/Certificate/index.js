import React, { useState } from "react";
import styled from "styled-components";
import CertificateCard from "../Cardlist/Certificatecard"; // Importera CertificateCard här
import { Certificates } from "../../data/constans"; // Antag att du har definierat Certificates-arrayen i rätt fil

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 5;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 14px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ToggleGroup = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ToggleButton = styled.button`
  background-color: ${({ active, theme }) => (active ? theme.primary : "transparent")};
  color: ${({ active, theme }) => (active ? "#fff" : theme.text_primary)};
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${({ theme }) => theme.text_primary};
  margin-right: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 28px;
`;

const CertificateSection = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="certifikat">
      <Wrapper>
        <Title>Certifikat</Title>
        <Desc>Det här har jag erhållit under de senaste 2 åren.</Desc>

        <ToggleGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALLA
          </ToggleButton>
          <Divider />

          <ToggleButton
            active={toggle === "frontend"}
            onClick={() => setToggle("frontend")}
          >
            FRONTEND
          </ToggleButton>
          <Divider />

          <ToggleButton
            active={toggle === "backend"}
            onClick={() => setToggle("backend")}
          >
            BACKEND
          </ToggleButton>
          <Divider />

          <ToggleButton
            active={toggle === "cloud"}
            onClick={() => setToggle("cloud")}
          >
            CLOUD
          </ToggleButton>
        </ToggleGroup>

        <CardContainer>
          {toggle === "all" &&
            Certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          {Certificates.filter((certificate) => certificate.category === toggle).map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
          {toggle !== "all" &&
            Certificates.filter((certificate) => certificate.category !== toggle) === 0 && (
              <p>Inga certifikat hittades för denna kategori.</p>
            )}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default CertificateSection;
