import "./projectlist.scss";
import Project from "../project/Project";
export default function ProjectList() {
  return (
    <div className="project__list">
      <div className="project__list__top">
        <h2 className="project__list__top--title">
          Tout est une question de détermination
        </h2>
        <p className="project__list__top--quote">
          <q>Il faut oser ou se résigner à tout.</q>
        </p>
      </div>
      <div className="project__list__content">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
