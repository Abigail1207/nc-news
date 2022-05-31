import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import { Route, Routes } from "react-router-dom";
import IndividualArticle from "./components/IndividualArticle";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <Topics />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route
          path="/articles/:article_id"
          element={<IndividualArticle />}
        ></Route>
        <Route path="/topics/:topic" element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

// 여기서는 사용자가 path를 입력하면, 즉 articles/1을 하면 element에서 그 정보를 가져온다. 
// 그 element는 :article_id가 잘 연결되어있도록 로직을 잘 써주었어야한다. 
export default App;
