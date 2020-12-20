import React from 'react';
// import router from '../../server/app/routes/user';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router , Switch, Route } from  "react-router-dom";
import Doctors from "./components/doctors";
import Articles from "./components/articles";
import Questions from "./components/questions";
import Login from "./components/login";
import Home from "./components/home";
import AddQuestion from "./components/askQuestions";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/doctors" component={Doctors}/>
      <Route path="/articles" component={Articles}/>
      <Route path="/questions" component={Questions}/>
      <Route path="/login" component={Login}/>
      <Route path="/askQuestions" component = {AddQuestion}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
