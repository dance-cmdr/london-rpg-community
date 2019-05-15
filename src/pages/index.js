import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TwitterFeed from '../components/twitterFeed'
import WelcomeNote from '../components/welcomeNote';
import SocialButtons from '../components/socialButtons';
import DiscordWidget from '../components/discordWidget';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`london`, 'rpg', 'community', 'games', 'tabletop', 'role', 'playing', 'games']} />
    <SocialButtons/>
    <div class="container">
      <WelcomeNote/>
      <DiscordWidget/>
    </div>
    <TwitterFeed/>    
  </Layout>
)

export default IndexPage
