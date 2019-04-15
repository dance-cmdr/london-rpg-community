import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from './logo';

const Header = ({ siteTitle, siteTheme }) => (
  <header
    style={{
      background: `${siteTheme.PRIMARY_COLOR }`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        maxHeight: `calc(100vh - 2rem)`,
        width: `calc(100vh * 0.65)`,
        margin: `0 auto`,
      }}
    >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
            <Logo />
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteTheme: PropTypes.object
}

Header.defaultProps = {
  siteTitle: ``,
  siteTheme: {},
}

export default Header
