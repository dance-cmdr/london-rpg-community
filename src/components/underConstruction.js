import React from 'react';

const UnderConstruction = () => (
    <section style={{
        display: `flex`,
        flexFlow: `row wrap`,
        width: `100%`,
        margin: `24px 0 `
      }}>
        <div style={{
          background: `repeating-linear-gradient(135deg,#fffb7a,#fffb7a 30px,#464646 0,#464646 60px)`,
          padding: `0`,
          boxSizing: `border-box`,
          boxShadow: `0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)`,
          width: `100%`
        }}>
          <h2 style={{
            background: `#ffffff`,
            color: `#464646`,
            margin: `15px 0`,
            padding: `10px`,
            textTransform: `uppercase`,
            textAlign: `center`,
          }}>Under Construction</h2>
      </div>
    </section>
)

export default UnderConstruction