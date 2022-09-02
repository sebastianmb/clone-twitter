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
/*-------POST---*/

export const Post=styled.div`
padding: 10px 15px;
border-top: 1px solid #ddd;
margin-top: 5px;
display: flex;
align-items: flex-start;
.post_avatar{
    margin-top: 5px;

}

`
export const PostBody=styled.div`
padding-left: 10px;
width: 100%;
overflow:hidden;
>div span{
    font-weight: 600;
    font-size: 15px;
    color: #5b508;
}
.post_icon{
    font-size: 14px !important;
    color: var(--twitterColor) !important;

}
h3{
    padding:0;
    margin:0;
}
`
export const PostDescription=styled.div`
margin-bottom:10px;

>p{
    margin:0;
    padding:0;
    color: #0f1419;
    font-size: 16px;
    line-height: 16.6875px;
   
}
`
export const PostFooter= styled.div`
display: flex;
justify-content:space-between;
color: #5b7083;
transition: all 100ms easi-in;
>.MuiSvgIcon-root:hover:nth-child(1){
    fill: #1da1f2;
    cursor:pointer;
 
}
>.MuiSvgIcon-root:hover:nth-child(2){
    fill: #17bf63;
    cursor:pointer;
 
}
>.MuiSvgIcon-root:hover:nth-child(3){
    fill: #e02452;
    cursor:pointer;
 
}
>.MuiSvgIcon-root:hover:nth-child(4){
    fill: #1da1f2;
    cursor:pointer;
 
}
`
export const  Images= styled.img`
border-radius:20px;
min-width: 100%;
width: 100%;
min-height: 300px;
`
