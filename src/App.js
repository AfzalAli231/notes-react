import "./App.css";
import 'bootswatch/dist/lux/bootstrap.min.css'
import Header from './components/Navbar'
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import Create from "./screens/Create";
import Notes from "./screens/Notes";
import React, { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/create"
          element={<Create setNotes={setNotes} notes={notes} />}
        />
        <Route
          path="/notes"
          element={<Notes setNotes={setNotes} notes={notes} />}
        />
      </Routes>
    </>
  );}