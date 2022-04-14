// const express = require("express");
// const app = express();
// App.use(express.json())
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Home } from './Components/Home';
import mongoose from 'mongoose';
let db = process.env.MongoURL;
if (db) {
  mongoose.connect(db).then(() => {
    console.log("Connected to server");
  }).catch((err) => {
    console.log({ "Unable to Connect": err });
  })
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={< Signup />}></Route >
      </Routes >
    </div >
  );
}

export default App;
