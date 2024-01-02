import { useParams } from "react-router-dom";
import "./categories.css";
import Header from "./../../components/header/Header";

export default function Categories() {
  const { article_category } = useParams();
  return (
    <>
      <Header withPadding />
      <div className="category">
        <div className="container">
          <h3 className="h-100">{article_category}</h3>
        </div>
      </div>
    </>
  );
}
