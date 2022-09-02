import React from 'react';
import { Search } from '@material-ui/icons';
import SearchIcon from "@material-ui/icons/Search";
import { Widget, Header, DivIcon, DivContent } from "./styles";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';


const Widgets = () => {
  return (
    <Widget>
      <Header>
        <DivIcon>
          <SearchIcon className='searchIcon' />
          <input placeholder='Buscar en Twitter clone' />
        </DivIcon>
      </Header>

      <DivContent>
        <h2>What's happening</h2>

        <TwitterTweetEmbed
          tweetId={'933354946111705097'}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="jehingson1"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://facebook.com/saurabhnemade'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
        />
      </DivContent>

    </Widget>


  )
}

export default Widgets
