import ArticlesList from './Components/ArticlesList';
import Article from './Components/Article';
import TopicsList from './Components/TopicsList';
import User from './Components/User';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import './CSS/App.css';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router id="app-router">
        <ArticlesList path="/" />
        <ArticlesList path="/articles" />
        <Article path="/articles/:article_id" />
        <TopicsList path="/topics" />
        <User path="/users/:username" />
      </Router>
    </div>
  );
}

export default App;
