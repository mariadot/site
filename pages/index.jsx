import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import react from '../static/img/react.png'
import html5 from '../static/img/html5.png'
import css3 from '../static/img/css3.png'
import git from '../static/img/git.png'
import js from '../static/img/js.png'
import npm from '../static/img/npm.png'
import jquery from '../static/img/jquery.png'
import webpack from '../static/img/webpack.png'

class SiteIndex extends React.Component {
    render() {
        return (
            <div>
              <Helmet title={ config.siteTitle }/>
              <div className='index-content'>
                <div className="hero">
                    <h1>Hello, my name is Maria Dot </h1>
                    <h2>I'm a front-end developer</h2>
                    I have a solid knowledge of HTML, CSS, JS
                    I have worked with jQuery, Reactjs and AngularJS.
                    <h3>Skills</h3>
                    <div className="languages">
                      <div>
                        <div className="circle"><i className="fa fa-code"></i></div>
                        <h4>html</h4>
                        <p>Suspendisse ac purus porta, malesuada nibh malesuada, ultrices lacus. Integer malesuada metus a est lacinia blandit. .</p>
                      </div>
                      <div>
                        <div className="circle"><i className="fa fa-file-o"></i></div>
                        <h4>css</h4>
                        <p>Morbi accumsan tristique ligula, id dictum eros pulvinar eget. In facilisis purus risus, at luctus enim ultrices et. Sed malesuada at nisl id auctor.</p>
                      </div>
                      <div>
                        <div className="circle"><i className="fa fa-terminal"></i></div>
                        <h4>js</h4>
                        <p>Quisque iaculis tortor consectetur, tristique ex a, porta libero. In facilisis purus risus, at luctus enim ultrices et.</p>
                      </div>
                    </div>
                    <hr/>
                    <h4>Tools</h4>
                    <div className="tools">
                      <div><img src={jquery} alt="jquery" /></div>
                      <div><img src={react} className="react-logo" alt="react" /></div>
                      <div><img src={git} alt="git" /></div>
                      <div><img src={npm} alt="npm" /></div>
                      <div><img src={webpack} alt="webpack" /></div>   
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
