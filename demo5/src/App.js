//import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from "./components/AboutPage";
import { Catalog } from "./components/Catalog";
import { Login } from "./components/login";
import { Movie } from './components/Movie';
import { Navigation } from "./components/navComponent";
import { NotFound } from "./components/notFound";

function App() {
  return (
    <div>
      <h1>Basic React Router Demo</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/details/:movieId' element={<Movie />}></Route>
      </Routes>
    </div>
  )
}

export default App;
