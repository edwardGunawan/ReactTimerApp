var React = require('react');
var {Link, IndexLink} = require('react-router');
var PropTypes = React.PropTypes;

var Nav = () => {
  return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            {/* this is setting the menu text where it is just a link */}
            <li className="menu-text">
              React Time App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link"> Timer </IndexLink>
            </li>
            <li>
              <Link to="/Countdown" activeClassName="active-link"> Countdown </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created By
              {/* target let you specify how are you going to set up the link
                _blank means open the link in the newtab so the current tab won't get closed*/}
              <a href="http://www.github.com/edwardGunawan" target="_blank"> Edward</a>
             </li>
          </ul>
        </div>
      </div>
    );
  };

module.exports = Nav;
