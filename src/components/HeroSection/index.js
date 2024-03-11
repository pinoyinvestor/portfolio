import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constans";

import HeroImg from "../../Img/HeroImg.png"; // Byt ut sökvägen till din bildfil
import HeroBgAnimation from "../HeroBgAnimation";

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0% 100%);
`;

const Herobg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0 0px;
    justify-content: center;
  }
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: px;

  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    text-align: center;
    font-size: 40px;
    line-height: 48;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  gap: 12px;
  display: flex;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 32px;
  margin-bottom: 42px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }
  cursor: pointer; /* Lägg till cursor-egenskapen här */

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;


const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const Image = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
    }

    @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
    }
    `;

    const Hero = () => {
      const handleResumeButtonClick = () => {
        alert("Telefonnummer: 123-456789"); // Visa telefonnummer i en popup
      };
    
      return (
        <div id="about">
          <HeroContainer>
            <Herobg>
              <HeroBgAnimation />
            </Herobg>
            <HeroInnerContainer>
              <HeroLeftContainer>
                <Title>
                  Hej Mitt namn är <br />
                  {Bio.name}
                </Title>
                <TextLoop>
                  Jag är{" "}
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
                <SubTitle>{Bio.description}</SubTitle>
                <ResumeButton
                  href={Bio.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleResumeButtonClick} // Använd funktionen för knappklick
                >
                  Kontakta mig
                </ResumeButton>
              </HeroLeftContainer>
              <HeroRightContainer>
                <Image src={HeroImg} alt="Hero" />
              </HeroRightContainer>
            </HeroInnerContainer>
          </HeroContainer>
        </div>
      );
    };
    
    export default Hero;
    