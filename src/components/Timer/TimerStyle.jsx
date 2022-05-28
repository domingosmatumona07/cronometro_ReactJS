import styled from "styled-components";

export const Container = styled.section`
  max-width: 400px;
  margin: auto;
  padding-block: 0.5rem;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  h1 {
    font-size: 2rem;
    margin: 0px;
    text-decoration: underline;
  }
`;

export const TimerCounter = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-top: 0.5rem;

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const MilisecondsSpan = styled.span`
  font-size: ${(props) => props.fontSize};
`;

export const TimerControllers = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0.2rem;

  button {
    cursor: pointer;
    font-weight: 700;
    padding-inline: 0.5rem;
    padding-block: 0.2rem;
  }
`;
