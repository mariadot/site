import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SitePost from '../components/SitePost'
import SiteSidebar from '../components/SiteSidebar'
import Project from '../components/Project'

class SiteIndex extends React.Component {
    render() {
        return (
            <div className="projects-page">
              <Helmet title={ config.siteTitle }/>
              <h1>Experiments and learning projects I've made</h1>
              <div className='projects-list'>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
              </div>
            </div>
              )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
