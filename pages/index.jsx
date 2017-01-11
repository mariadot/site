import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'

class SiteIndex extends React.Component {
    render() {
        return (
            <div>
              <Helmet title={ config.siteTitle }/>
              <div className='content'>
                <div className='main'>
                  <div className='main-inner'>
                    Hello, my name is Maria Dot and I'm a frontend developer
                    I have a solid knowledge of HTML, CSS, JS
                    I have worked with jQuery, Reactjs and AngularJS.
                  </div>
                </div>
              </div>
            </div>
              )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
