import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Articles from './components/Articles';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <Routes>
       <Route path="/" element={<Articles />}></Route>
       <Route paht="articles/:article_id" element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
