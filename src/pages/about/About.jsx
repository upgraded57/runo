import "./about.css";
import Header from "./../../components/header/Header";

export default function About() {
  return (
    <>
      <Header withPadding />
      <div className="about">
        <div className="container">
          <h1 className="h-300">About Us</h1>
        </div>
      </div>
    </>
  );
}
