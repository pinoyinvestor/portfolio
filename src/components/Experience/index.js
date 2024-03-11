import  React from "react"
import styled from "styled-components"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from "../../data/constans";
import ExperienceCard from "../Cardlist/ExperienceCard";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 40px 15px 80px 15px:

@media (max-width: 960px) {
    padding:20px 20px 40px 0px;
}
`;


const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 40px;
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
const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Experience = () => {

    return   (
    <Container id= "experience">
        <Wrapper>
                <Title>Erfarenhet</Title>
                <Desc>Här är några projekt jag har jobbat på</Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => 
                            <TimelineItem> 
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary"/>
                                    {index !== experiences.length - 1 && <TimelineConnector />}

                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx= {{py: "12", px: 2}}></TimelineContent>
                                <ExperienceCard experience={experience}/>


                            </TimelineItem>

                        )}

                    </Timeline>
                </TimelineSection>

        


        </Wrapper>
    </Container>
    );
};

export default Experience;