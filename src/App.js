import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Demo from './components/Demo';
import MyList from './components/MyList';


function App() {
  return (
    <div className="App">
      <Router>
      {/* <h1> Epidemic Sounds😒 </h1> */}
      <Routes>
        <Route path="/movies/:moviesId" element={<Demo/>} />
        <Route path="/mylist" element={<MyList/>} />
        <Route path="/" element={<HomeScreen/>} />
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here! Wrong Page</p>
        </main>
      }
    />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
