import React from 'react'
import {Avatar, Post, PostBody, PostDescription, PostFooter, Images } from "./styles";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Posts = () => {
  return (
    <div>
      <Post>
        <div className='post_avatar'>
            <Avatar src='https://randomuser.me/api/portraits/men/72.jpg'/>

        </div>
        <PostBody>
            <div>
                <div>
                    <h3>Json dev <span> 
                        <VerifiedUserIcon className='post_icon'/>
                        @jahinggson1</span> </h3>
                    <PostDescription>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </PostDescription>
                    <Images src="https://media.giphy.com/media/ES9cAJlcxblRESzOH1/giphy.gif"/>
                    <PostFooter>
                        <ChatBubbleOutlineIcon fontSize='small'/>
                        <RepeatIcon fontSize='small'/>
                        <FavoriteBorderIcon fontSize='small'/>
                        <PublishIcon fontSize='small'/>
                    </PostFooter>
                </div>
            </div>
        </PostBody>
      </Post>
    </div>
  )
}

export default Posts

