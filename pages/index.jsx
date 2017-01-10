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

class SiteMainIndex extends React.Component {
    render() {
        return (
            <div>
              <Helmet title={ config.siteTitle }/>
              <div className='content'>
                <div className='main'>
                  <div className='main-inner'>
                    Hello
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

export default SiteMainIndex
