import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ReadNext from '../ReadNext'
//import './style.css'
import '../../static/css/style.css'
import '../../static/css/highlight.css'

class SitePost extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        const home = (
          <span>
            <Link className='gohome basic-button' to={ prefixLink('/articles/') }> All Articles
            </Link>
          </span>
        )
        return (
            <div className="blog-page">
              { home }
              <div className='blog-single'>
                <div className='text'>
                  <h1>{ post.title }</h1>
                  <div className='date-published'>
                    <em>Published { moment(post.date).format('D MMM YYYY') }</em>
                  </div>
                  <hr/>
                  <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                </div>
                <hr/>
                <footer>
                  <p>
                    { config.siteAuthor }
                  </p>
                </footer>
              </div>
            </div>
            );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SitePost
