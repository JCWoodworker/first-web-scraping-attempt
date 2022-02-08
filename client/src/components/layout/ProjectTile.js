import React from "react"

const ProjectTile = props => {

  return (
    <>
      <div className="project-tile">
        <p><strong>Project Name: </strong>{props.project.name}</p>
        <p><strong>Description: </strong>{props.project.description}</p>
        <p><strong>Primary Language: </strong>{props.project.language}</p>
      </div>
      <div className="tile-underline"></div>
    </>
  )
}

export default ProjectTile