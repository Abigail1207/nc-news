import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Articles from './components/Articles';
import { Route, Routes } from 'react-router-dom';
import IndividualArticle from './components/IndividualArticle';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <Routes>
       <Route path="/" element={<Articles />}></Route>
       <Route path="/articles/:article_id" element={<IndividualArticle />}></Route>
      </Routes>
    </div>
  );
}

// 여기서는 사용자가 path를 입력하면, 즉 articles/1을 하면 element에서 그 정보를 가져온다. 
// 그 element는 :article_id가 잘 연결되어있도록 로직을 잘 써주었어야한다. 
export default App;
