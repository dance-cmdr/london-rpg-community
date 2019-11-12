import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CodeOfConduct = () => (
  <Layout>
    <SEO title="Code of Conduct" />
    <p className="align-right">LRC Code of Conduct, version of 28.08.2019.</p>
    <h1>Code of Conduct </h1>
    <p>
        <strong>The London RPG Community is committed to providing a safe and welcoming environment for everyone wanting to participate in role-playing games and other activities.</strong>
    </p>

    <p>
    <h2>General Rules:</h2>
        <ul>
            <li>This Code of Conduct applies to all events and online platforms hosted by LRC.</li>
            <li>Four strike rule will be applied in cases of offence: first warning, second warning, temporary ban, permanent ban.</li>
            <li>Please do not promote other RPG-related meetups without approval from an Admin.</li>
        </ul>
    </p>
    <p>
        It’s so important to have open and positive games, so we do not tolerate any kind of harassment in all interactions among community members. We will take action in response to harassment related to national origin, gender, gender identity and expression, race, ethnicity, sexual orientation, physical characteristics, disability, religion, and age. 
    </p>

    <h2>What is harassment? What would we like to prevent here?</h2>
    <h4>
        Examples of unacceptable offline and online behaviours include:
    </h4>
        <ol>
            <li>Verbal comments that are offensive and reinforce oppression related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, ethnicity, age or religion (or lack thereof); </li>
            <li>Imitating or making fun of accents or grammatical errors, or giving unsolicited grammar corrections (but clarifying questions are fine);</li>
            <li>General bullying;</li>
            <li>Verbal threats or demands;</li>
            <li>Sexualized images in public spaces;</li>
            <li>Intimidation;</li>
            <li>Stalking;</li>
            <li>Harassing photography or recording;</li>
            <li>Sustained disruption of games, events, or online communication channels;</li>
            <li>Unwelcome physical contact or sexual attention;</li>
            <li>Drugging food or drink;</li>
            <li>Enlisting the help of others, whether in person or online, in order to target a member;</li>
            <li>Gender assumptions and policing;</li>
            <li>Advocating for or encouraging any of the above behaviour.</li>
        </ol>
    <p>
        Participants who are asked to stop harassing behaviours are expected to cease immediately. Depending on severity of harassment or repeat offenses, GMs, event hosts, or Admins will respond appropriately, including - but not limited to - giving warnings or expulsion from the event or our online servers. With the consent of the person being harassed, local authorities will be called if needed.
    </p>
    <p>
        We count on <strong>everyone</strong> to do their part to ensure positive experiences for all participants. 
         <strong>
            If you are being harassed, notice that someone else is being harassed, or have any other concerns, please let us know.
        </strong>
    </p>

    <h2>Reporting Violations</h2>
    <p>
        <h4>
        Reports can be made confidentially by doing one of the following:
        </h4>
        <ul>
            <li>Speaking to a GM or event host or messaging them via Meetup;</li>
            <li>Contacting any of the Moderators or Admins on the Discord server;</li>
            <li>Twitter Direct Message to <strong>@RPGCommunityLDN</strong> | <Link to="https://twitter.com/rpgcommunityldn">https://twitter.com/rpgcommunityldn</Link> </li>
        </ul>
        <strong>All reports are confidential.</strong> You will not be asked to take actions that make you feel unsafe.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CodeOfConduct
