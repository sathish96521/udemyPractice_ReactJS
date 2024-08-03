import reactLogo from "../../assets/react-core-concepts.png";
import "./Header.css";
import React from "react";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
  // Code Without JSX

  //   React.createElement(
  //     "header",
  //     React.createElement("img", { src: { reactLogo }, alt: "Stylized atom" }),
  //     React.createElement("h1", null, "React Essentials"),
  //     React.createElement(
  //       "p",
  //       {description},"React concepts you will need for almost any app you are going to build!"
  //     )
  //   )
  // );
}

export default Header;
