import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import Topics from './components/Topics';
import { Route, Routes } from 'react-router-dom';
import IndividualArticle from './components/IndividualArticle';

function App() {
  return (
    <div className="App">
      <Header />
      <Topics />
      <Routes>
       <Route path="/" element={<Articles />}></Route>
       <Route path="/articles/:article_id" element={<IndividualArticle />}></Route>
       <Route path="/topics/:topic" element={<Articles />}></Route>
       </Routes>
    </div>
  );
}

export default App;

