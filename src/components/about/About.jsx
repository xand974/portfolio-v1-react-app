import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AboutBlob } from "../blob/Blob";
import "./about.scss";

export default function About() {
  const aboutRef = useRef();
  const contentRef = useRef();
  const [mouseY, setMouseY] = useState(0);
  useEffect(() => {
    // let options = {
    //   root: aboutRef.current,
    //   rootMargin: "-10% 0px",
    //   threshold: 0,
    // };
    // window.addEventListener("scroll", (e) => {
    //   setMouseY(window.scrollY);
    // });
    // const handleObserver = (items) => {
    //   items.forEach((item) => {
    //     item.target.style.transform = `translateY(${mouseY / 2}px)`;
    //   });
    // };
    // const observer = new IntersectionObserver(handleObserver, options);
    // observer.observe(contentRef?.current);
  }, [aboutRef, contentRef, mouseY]);

  return (
    <div className="about" ref={aboutRef}>
      <div className="about__left">
        <div className="about__left__container">
          <img
            className="about__left__container--img"
            src="https://images.unsplash.com/photo-1503796964332-e25e282e390f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
      <div className="about__right">
        <div className="about__right__container">
          <h2 className="about__right__container--title">About me</h2>
          <p
            className="about__right__container--content"

            // onMouseMove={handleMouseMove}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            ullam, necessitatibus possimus, temporibus sequi similique sit culpa
            ipsum laudantium debitis quibusdam deleniti blanditiis mollitia
            inventore quia minus quasi rerum praesentium, id perferendis
            delectus nisi optio. Quam doloremque a officiis maxime.
          </p>
        </div>
        <AboutBlob
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            height: "50%",
            zIndex: -1,
          }}
        />
      </div>
      <div className="float--item" ref={contentRef}>
        <div className="float--item--shape left"></div>
        <div className="float--item--shape middle"></div>
        <div className="float--item--shape right"></div>
      </div>
    </div>
  );
}
