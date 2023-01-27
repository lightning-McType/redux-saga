export default function ShowTime({ color, time }) {
  return <div>{color && <h1 style={{ color: color }}>{time}</h1>}</div>;
}
