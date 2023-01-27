import { useEffect, useState } from "react";
import ShowTime from "./ShowTime";

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState("");
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <select name="color-selector" value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">Choose a color</option>
        <option value="red">red</option>
        <option value="grey">grey</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>
      <ShowTime color={color} time={time} />
    </div>
  );
}
