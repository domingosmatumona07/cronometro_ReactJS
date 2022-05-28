import React, { useState } from "react";
import * as TimerElements from "./TimerStyle";
import { Button } from "../Button/Button";

const timeFormat = (number) => (number < 10 ? `0${number}` : number);
let timer;

export const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);

  const [btnStartDisabled, setBtnStartDisabled] = useState(false);
  const [btnPauseDisabled, setBtnPauseDisabled] = useState(true);
  const [btnResetDisabled, setBtnResetDisabled] = useState(true);

  const [btnStartText, setBtnStartText] = useState("Start");

  function setButtonsStates(start, pause, reset) {
    setBtnStartDisabled(start);
    setBtnPauseDisabled(pause);
    setBtnResetDisabled(reset);
  }

  function start() {
    timer = setInterval(() => {
      setMiliseconds((miliseconds) => miliseconds + 1);
    }, 10);
    setButtonsStates(true, false, false);
  }

  function pause() {
    clearInterval(timer);
    setButtonsStates(false, true, false);
    setBtnStartText("Resume");
  }

  function reset() {
    clearInterval(timer);
    setMinutes(0);
    setSeconds(0);
    setMiliseconds(0);

    setButtonsStates(false, true, true);
    setBtnStartText("Start");
  }

  if (miliseconds === 100) {
    setSeconds((seconds) => seconds + 1);
    setMiliseconds(0);
  }

  if (seconds === 60) {
    setMinutes((minutes) => minutes + 1);
    setSeconds(0);
    setMiliseconds(0);
  }

  return (
    <>
      <TimerElements.Container>
        <h1>Cronómetro</h1>
        <TimerElements.TimerCounter>
          {timeFormat(minutes)}:{timeFormat(seconds)}.
          <TimerElements.MilisecondsSpan fontSize="2rem">
            {timeFormat(miliseconds)}
          </TimerElements.MilisecondsSpan>
        </TimerElements.TimerCounter>
        <TimerElements.TimerControllers>
          <Button onClickFunction={start} disabled={btnStartDisabled}>
            {btnStartText}
          </Button>
          <Button onClickFunction={pause} disabled={btnPauseDisabled}>
            Pause
          </Button>
          <Button onClickFunction={reset} disabled={btnResetDisabled}>
            Reset
          </Button>
        </TimerElements.TimerControllers>
      </TimerElements.Container>
    </>
  );
};
