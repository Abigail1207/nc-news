import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Articles from './components/Articles';
import Topics from './components/Topics';
import { Route, Routes } from 'react-router-dom';
import IndividualArticle from './components/IndividualArticle';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <Topics />
      <Routes>
       <Route path="/article" element={<Articles />}></Route>
       <Route path="/articles/:article_id" element={<IndividualArticle />}></Route>
       <Route path="/api/topics/:topic" element={<Topics />}></Route>
       </Routes>
    </div>
  );
}

export default App;

