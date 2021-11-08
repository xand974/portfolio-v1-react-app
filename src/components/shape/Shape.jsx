import "./shape.scss";

export default function Shape({ bgColor }) {
  return <div className={`shape`} style={{ backgroundColor: bgColor }}></div>;
}
