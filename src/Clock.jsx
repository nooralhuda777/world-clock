import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const Clock = function (props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <div className="card">
        {/* Render date value that is stored in state */}
        <p>
          {props.timeZone} :
          {date.toLocaleString("en-GB", { timeZone: `${props.timeZone}` })}
        </p>
      </div>
    </>
  );
};
export default Clock;
