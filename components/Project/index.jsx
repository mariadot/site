import React from 'react'

class Project extends React.Component {
    render() {
        return (
            <div className="project">
              <h2>Project Name</h2>
              <p>Project description</p>
              <div className="project-links">
	              <a className="basic-button" href="#">Project Repo</a>
	              
	              <a className="basic-button" href="#">Project Demo</a>
              </div>
            </div>
        )
    }
}

Project.propTypes = {
    route: React.PropTypes.object,
}

export default Project