import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
//import './style.css'
import '../../static/css/style.css'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav className='blog-nav'>
              <ul>
                <li>
                  <Link to={ prefixLink('/')} activeClassName="current" onlyActiveOnIndex> Home
                  </Link>
                </li>
                <li>
                  <Link to={ prefixLink('/articles/')} activeClassName="current"> Articles
                  </Link>
                </li>
                <li>
                  <Link to={ prefixLink('/projects/')} activeClassName="current"> Projects
                  </Link>
                </li>
              </ul>
            </nav>
            );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav
