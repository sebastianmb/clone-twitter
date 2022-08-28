import React from "react";
import {Containner, Header} from "./styles";
import TweetBox from "./TweetBox";


export default function Home(){
    return(
        <Containner>
            {/*Header*/}
            <Header><h2>Home</h2></Header>

            {/*TweetBox*/}
            <TweetBox/>
            {/*Post*/}
        </Containner>
    )
}