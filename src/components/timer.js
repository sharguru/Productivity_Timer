import React, { useEffect, useState } from "react";

const Pomodoro = (props) => {
  const min = Number(props.min);
  const second = Number(props.second);
  const breakTime = Number(props.breakTime);

  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(second);
  const [displayBreakText, setDisplayBreakText] = useState(false);
  let timerMinutes = minutes < 10 ? "0" + minutes : minutes;
  let timerSeconds = seconds < 10 ? "0" + seconds : seconds;

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes === 0) {
          setDisplayBreakText(!displayBreakText);
          displayBreakText ? setMinutes(min) : setMinutes(breakTime);
          setSeconds(59);
        } else if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      } else if (seconds !== 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  return (
    <div className="timer">
      <div className="breakText">
        {displayBreakText && <div> Next Session will start in : </div>}
      </div>
      <div className="realTime">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
};

export default Pomodoro;
