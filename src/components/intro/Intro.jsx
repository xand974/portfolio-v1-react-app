import "./intro.scss";
import { ArrowDownwardOutlined } from "@mui/icons-material";
// import ProfilePicture from "../../images/ProfilePicture.png";
export default function Intro() {
  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__text">
          <h1 className="intro__text--light">My name is</h1>
          <p className="intro__text--username">Alexandre Malet</p>
          <p className="intro__text--job">Web Developer</p>
          <p className="intro__text--description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            accusantium quasi blanditiis, porro iure nemo non velit itaque
            corrupti magnam quaerat fuga quam? Odio, eaque dicta! Doloribus
            porro rem asperiores.
          </p>
          <ArrowDownwardOutlined className="arrow--icon" />
        </div>
      </div>
      <div className="intro__right">
        {/* <img className="profile--img" src={ProfilePicture} alt="" /> */}
      </div>
    </div>
  );
}
