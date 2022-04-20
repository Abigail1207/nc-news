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

export default App;

// I haven't changed my branch when I started this.....omg I am just realized 