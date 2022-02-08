import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import ProjectsIndex from "./layout/ProjectsIndex"


const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined)
  const [scraped, setScraped] = useState([])

  const fetchScrapedData = async () => {
    try {
      const response = await fetch('/api/v1/scraper')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const scrapedData = await response.json()
      setScraped(scrapedData.projects)
    } catch(error) {
    console.error(`Error in fetch: ${error.message}`)
    }
  }

  const clearData = () => {
    setScraped([])
    console.log('cleared')
  }

  useEffect(() => {
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="main-content">
            <h2 className="main-header">Mock Coding Challenge</h2>
            <h3>Click the button below to scrape GitHub's trending projects</h3>
            <div className="buttons-container">
              <label htmlFor="scrape-data">
                <button className="scrape-button" onClick={fetchScrapedData}>SCRAPE DATA</button>
              </label>
              <label htmlFor="clear-data">
                <button className="clear-data-button" onClick={clearData}>CLEAR DATA</button>
              </label>
            </div>
          </div>
          <div className="projects-container">
            <ProjectsIndex gitHubData={scraped} />
          </div>
        </Route>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
