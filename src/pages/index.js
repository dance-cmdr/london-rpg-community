import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TwitterButton from '../components/twitterButton'
import TwitterFeed from '../components/twitterFeed'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`london`, 'rpg', 'community', 'games', 'tabletop', 'role', 'playing', 'games']} />
    <TwitterButton/> 
    <TwitterFeed/>
  </Layout>
)

export default IndexPage
