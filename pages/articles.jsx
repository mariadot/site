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

class SiteIndex extends React.Component {
    render() {
        const pageLinks = []
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
        ).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
                const title = access(page, 'data.title') || page.path
                const description = access(page, 'data.description')
                const datePublished = access(page, 'data.date')
                const category = access(page, 'data.category')
                const categories = category.split(' ')

                pageLinks.push(
                    <div className='blog-post'>
                      <h2>
                        <Link to={ prefixLink(page.path) } > { title } </Link>
                      </h2>        
                      <time dateTime={ moment(datePublished).format('MMMM D, YYYY') }>
                          { moment(datePublished).format('MMMM D, YYYY') }
                      </time> 
                      <p dangerouslySetInnerHTML={ { __html: description} }></p>
                      
                      <footer>
                        <span className="categories">
                          { categories.map((category) => (<span className='blog-categories'>{category}</span>))}
                        </span>
                        <span className='read-more'>
                        <Link  to={ prefixLink(page.path) }> 
                          ...
                        </Link>
                      </span>
                      </footer>
                    </div>
                )
            }
        })

        return (
            <div>
              <Helmet title={ config.siteTitle }/>
              <div className='content'>
                <div className='main'>
                  <div className='main-inner'>
                    { pageLinks }
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
