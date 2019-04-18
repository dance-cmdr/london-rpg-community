import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TwitterFeed from '../components/twitterFeed'
import WelcomeNote from '../components/welcomeNote';
import SocialButtons from '../components/socialButtons';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`london`, 'rpg', 'community', 'games', 'tabletop', 'role', 'playing', 'games']} />
    <SocialButtons/>
    <WelcomeNote/>
    <TwitterFeed/>    
  </Layout>
)

export default IndexPage
