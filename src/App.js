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

function App() {
  const [currentArticle, setCurrentArticle] = useState();
  const [article, setArticle] = useState();

  useEffect(() => {
    fetch(
      `https://shrelington-news.herokuapp.com/api/articles/${currentArticle}`
    )
      .then((res) => res.json())
      .then((res) => {
        setArticle(res);
      });
  }, [currentArticle]);

  const user = {
    username: "danewhitfield",
    name: "Dane Whitfield",
    avatar_url: avatar,
  };

  return (
    <div className="App">
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/articles"
          element={
            <Articles
              currentArticle={currentArticle}
              setCurrentArticle={setCurrentArticle}
            />
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/users/profile" element={<UserProfile user={user} />} />
        <Route path="/topics" element={<Topics />} />
        <Route
          path="/articles/:article_id"
          element={
            <SingleArticle currentArticle={currentArticle} article={article} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
