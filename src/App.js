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
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  // USER
  const user = {
    username: "danewhitfield",
    name: "Dane Whitfield",
    avatar_url: avatar,
  };
  //

  // ARTICLES
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, []);
  //
  // -------------------------------------------------------------------------
  //

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Nav user={user} />
        <Routes>
          <Route path="/" element={<Home user={user} articles={articles} />} />
          <Route
            path="/articles"
            element={<Articles articles={articles} setArticles={setArticles} />}
          />
          <Route path="/users" element={<Users />} />
          <Route
            path="/users/:username"
            element={<UserProfile user={user} />}
          />
          <Route path="/topics" element={<Topics />} />
          <Route
            path="/topics/:slug"
            element={<SingleTopic articles={articles} />}
          />
          <Route
            path="/articles/:article_id"
            element={<SingleArticle user={user} />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
