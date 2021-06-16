import "./App.css"
import React, { Fragment } from "react"
import Header from "./components/layout/Header"
import Home from "./components/layout/Home"
import Footer from "./components/layout/Footer"
import About from "./components/layout/About"
import Education from "./components/layout/Education"
import Help from "./components/layout/Help"
import { Route, BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Header></Header>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/education" component={Education}></Route>
          <Route exact path="/help" component={Help}></Route>
          <Footer></Footer>
        </Fragment>
      </Router>
    </div>
  )
}

export default App
