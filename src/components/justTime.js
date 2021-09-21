import React, { useEffect, useState } from "react";

const JustTime = () => {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  useEffect(() => {
    setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
  }, seconds);
  const timerHours = hours < 10 ? "0" + hours : hours;
  const timerMinutes = minutes < 10 ? "0" + minutes : minutes;
  const timerSeconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    <div className="realTime">
      {timerHours} : {timerMinutes} : {timerSeconds}
    </div>
  );
};

export default JustTime;
