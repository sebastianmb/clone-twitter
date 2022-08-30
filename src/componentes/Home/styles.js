import styled from "styled-components";


export const Containner = styled.div`

    flex: 0.5;
    border-rigth: 1px solid #ddd;
    overflow-y: scroll;
    box-sizing: border-box;

    &::-webkit-scrollbar{
        display: none;
        
    }
    --ms-overflow-style:none;
    scrollbar-width:none;


`


export const Header = styled.header`


`

/* THE BOX */

export const Tweetbox= styled.div`
border: 1px solid red;
padding: 5px 15px;

`

export const Div= styled.div`

display: flex;
width: 100%;
>.columns{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 16px;
    >input{
        margin-left: 10px;
        margin-top: 10px;
        width:100%;
        border: none;
        outline: 0;
        font-size: 19px;
        line-height:25px;
        color:#0f1419;
    }
}
>input{
    margin-left: 26px;
    width:100%;
    flex:1;
    border: none;
    font-size: 19px;
    line-height: 25px;
    color:#0f1419;
    outline: 0;
}
>Button{
    background-color: var(--twitterColor) !important;
    border:none !important;
    color: white !important;
    font-weight:900 !important;
    width: 80px !important;
    height: 40px !important;
    margin-top: 20px !important;
    border-radius: 30px !important;
    text-transform: inherit !important;
}

`

export const DivBox=styled.div`
 display: flex;
 justify-content: space around;
 align-items:center;
 >.MuiSvgIcon-root{
    fill: var(--twitterColor);
    margin-left: 1rem;
    border: 2px solid var(--twitterColor);
    width:20px;
    height:20px;
    border-radius: 5px;
    cursor: pointer;
    &:nth-child(3){
        border: 1px solid red;
    }
 }
`

export const Avatar = styled.img`

border-radius: 50%;
width: 67px;
height: 60 px;
object-fit: fill;
`

export const Form= styled.form`

display: flex;
flex-direction: column;

`
