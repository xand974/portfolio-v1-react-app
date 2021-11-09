import "./project.scss";
import webSiteScreen from "../../images/screencapture-localhost-3000-2021-11-09-23_33_00.png";
export default function Project() {
  const Button = ({ bgColor }) => {
    return <div className="project--btn" style={{ background: bgColor }}></div>;
  };
  return (
    <div className="project">
      <div className="project__border">
        <div className="project__header">
          <div className="buttons">
            <Button bgColor="#ff1919" />
            <Button bgColor="#ffd07f" />
            <Button bgColor="#3af43a" />
          </div>
        </div>
        <img className="project--img" src={webSiteScreen} alt="" />
      </div>
      <div className="box-shadow"></div>
    </div>
  );
}
