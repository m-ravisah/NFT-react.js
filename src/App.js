import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Marketplace from "./components/Marketplace";
import Explore from "./components/Explore";
import Stats from "./components/Stats";
import Creator from "./components/Creator";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Createnft from "./components/Createnft";
import Collections from "./components/Collections";
import Edit from "./components/Edit";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/Creator" element={<Creator />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createnft" element={<Createnft />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/profile/edit" element={<Edit />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
