import React from 'react';

const UsefulLinks = () => (
    <div>
        <h2>Useful Links</h2>
        <ul style={{
        listStyleType: `none`,
        margin: 0,
        }}>
            <li>
                <a 
                    href="https://www.meetup.com/LondonRPGCommunity/"
                    target = "_blank"
                    style={{
                        color: `black`,
                        textDecoration: `none`,
                    }}
                >
                    Meetup Group
                </a>
            </li>
        </ul>
    </div>
)

export default UsefulLinks;