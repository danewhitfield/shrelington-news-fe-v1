import "./App.css";
import "./Articles.css";
import "./Navbar.css";
import "./Users.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Users from "./components/Users";
import avatar from "./images/danewhitfield-avatar.jpg";
import UserProfile from "./components/UserProfile";
import { useEffect, useState } from "react";
import Topics from "./components/Topics";
import SingleArticle from "./components/SingleArticle";
import SingleTopic from "./components/SingleTopic";
import { getArticles } from "./utils/api";

function App() {
  // ARTICLES
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   getArticles()
  //     .then((articlesFromApi) => {
  //       console.log("articlesFromApi:", articlesFromApi);
  //       setArticles(articlesFromApi.articles);
  //       setErr(null);
  //     })
  //     .catch((err) => {
  //       setErr("Not found!!!!");
  //     });
  //   // fetch("https://shrelington-news.herokuapp.com/api/articles")
  //   //   .then((res) => res.json())
  //   //   .then((res) => {
  //   //     setArticles(res);
  //   //   });
  // }, []);

  const [currentArticle, setCurrentArticle] = useState(1);
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetch(
      `https://shrelington-news.herokuapp.com/api/articles/${currentArticle}`
    )
      .then((res) => res.json())
      .then((res) => {
        setArticle(res);
      });
  }, [currentArticle]);
  //
  // -------------------------------------------------------------------------
  //

  // TOPICS
  const [currentTopic, setCurrentTopic] = useState();
  //
  // -------------------------------------------------------------------------
  //

  // USER
  const user = {
    username: "danewhitfield",
    name: "Dane Whitfield",
    avatar_url: avatar,
  };
  //

  return (
    <div className="App">
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} articles={articles} />} />
        <Route
          path="/articles"
          element={
            <Articles
              currentArticle={currentArticle}
              setCurrentArticle={setCurrentArticle}
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/users/profile" element={<UserProfile user={user} />} />
        <Route
          path="/topics"
          element={
            <Topics
              currentTopic={currentTopic}
              setCurrentTopic={setCurrentTopic}
            />
          }
        />
        <Route
          path="/topics/:slug"
          element={
            <SingleTopic currentTopic={currentTopic} articles={articles} />
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <SingleArticle
              currentArticle={currentArticle}
              article={article}
              user={user}
              // comments={comments}
              // setComments={setComments}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
