import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const getClock = () => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds}`);
    };

    getClock();
    const interval = setInterval(getClock, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <ClockTime>{time}</ClockTime>;
};

const ClockTime = styled.div`
  text-align: center;
  font-size: min(150px, 15vw);
`;

export default Clock;
