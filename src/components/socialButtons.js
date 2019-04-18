import React from "react"
import { SocialIcon } from "react-social-icons"

import "./socialButtons.css"

const SocialButtons = () => (
    <ul className="social-buttons clearfix">
      <li>
        <SocialIcon url="https://twitter.com/RPGCommunityLDN" />
      </li>
      <li>
        <SocialIcon url="https://www.facebook.com/RPGCommunityLDN/" />
      </li>
      <li>
        <SocialIcon url="https://www.instagram.com/rpgcommunityldn/" />
      </li>
      <li>
        <SocialIcon url="https://www.meetup.com/LondonRPGCommunity/" network="meetup" />
      </li>
    </ul>
)

export default SocialButtons
