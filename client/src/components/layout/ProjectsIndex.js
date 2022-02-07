import React, { useState } from "react"
import ProjectTile from "./ProjectTile"

const ProjectsIndex = props => {
  let showTotalProjects = null
  let projectsHeading = <h1>Waiting for you to click the "Scrape Data" button!</h1>
  const projectTiles = props.gitHubData.map(project => {
    return <ProjectTile key={project.name} project={project} />
  })
  
  if (props.gitHubData.length > 0) {
    projectsHeading = 
      <h1 
        className="projects-heading">
          Git Hub Trending Projects
      </h1>
    showTotalProjects = 
      <h3>
        {`Total Projects: ${props.gitHubData.length}`}
      </h3>
  }

  return (
    <div>
      {projectsHeading}
      <div className="heading-underline"></div>
      {projectTiles}
      {showTotalProjects}
    </div>
  )
}

export default ProjectsIndex