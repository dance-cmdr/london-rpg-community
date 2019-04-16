import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TwitterButton from '../components/twitterButton'
import TwitterFeed from '../components/twitterFeed'
import UnderConstruction from '../components/underConstruction';
import UsefulLinks from '../components/usefulLinks';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`london`, 'rpg', 'community', 'games', 'tabletop', 'role', 'playing', 'games']} />
    <TwitterButton/> 
    <UnderConstruction/>
    <UsefulLinks/>
    <TwitterFeed/>
    
  </Layout>
)

export default IndexPage
