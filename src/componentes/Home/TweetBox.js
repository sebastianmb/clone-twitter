import React from 'react';
import {Tweetbox, Div, Avatar, Form, DivBox} from './styles';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import GifIcon from '@material-ui/icons/Gif';
import { Button } from '@material-ui/core';


const TweetBox = () => {
  return (
    <Tweetbox>
      <Form>
        <Div>
            <Avatar src ='https://randomuser.me/api/portraits/men/11.jpg' alt="" />
                <div className='columns'>
                    <input type={"text"} placeholder="Dejemos un tweet" />
                    <input type={"text"} placeholder="Usuario" />
                </div>
        </Div>
        <Div>
            <DivBox>
              <AddPhotoAlternateIcon/>
              <GifIcon/>
            </DivBox>
            <input type={"text"} placeholder="Opcional Url de la imagen/gif" />
            <Button>Tweet</Button>
        </Div>
        
      </Form>
    </Tweetbox>
  )
}

export default TweetBox
