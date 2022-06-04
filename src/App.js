import styles from "../src/css/App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import { Route, Routes } from "react-router-dom";
import IndividualArticle from "./components/IndividualArticle";
import Comments from "./components/Comments";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <Topics />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route
          path="/articles/:article_id"
          element={<IndividualArticle />}
        ></Route>
        <Route path="/topics/:topic" element={<Articles />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
