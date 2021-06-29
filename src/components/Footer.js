import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <BottomNavigation >
          <a
            className="LinkedIn-link"
            href="https://www.linkedin.com/in/pranay-bolem/"
            target="_blank"
            rel="noopener noreferrer"
            >
                <BottomNavigationAction color="red" label="LinkedIn" value="recents" icon={<LinkedInIcon  style={{fill: "#3b5998"}}/>} />
            </a>
          <a
            className="twitter-link"
            href="https://twitter.com/PranayLuffy"
            target="_blank"
            rel="noopener noreferrer"
            >
                <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
            </a>
          <a
            className="Instagram-link"
            href="https://www.instagram.com/pranaybabbu/"
            target="_blank"
            rel="noopener noreferrer"
            >
                <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
            </a>
          <a
            className="YouTube-link"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            >
                <BottomNavigationAction label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "#c4302b"}}/>} />
            </a>
        </BottomNavigation>
)
}

export default Footer