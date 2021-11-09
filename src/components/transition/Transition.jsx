import "./transition.scss";
import Shape from "../shape/Shape";
export default function ProductsList() {
  return (
    <div className="transition">
      <Shape bgColor="#7a5aec" />
      <div className="transition__left">
        <div className="transition__left__container">
          <img
            className="transition__left__container--img"
            src="https://images.unsplash.com/photo-1634591839746-42af2534734d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGJsYWNrJTIwcHVycGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
        <div className="transition__left--barre"></div>
      </div>
      <div className="transition__right">
        <h1 className="transition__right--title">NEXT STEP </h1>
        <p className="transition__right--content">SEE MY PROJECTS</p>
      </div>
    </div>
  );
}
