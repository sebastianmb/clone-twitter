import styled from "styled-components";


export const Widget= styled.div`
flex: 0.3;
overflow-y: scroll;
box.sizing: border-box;
padding: 0 30px 10px 20px;
&::-webkit-scrollbar{
    display: none;
    
}
--ms-overflow-style:none;
scrollbar-width:none;
`

export const Header= styled.div`
background: white;
heigth: 50px;
position: sticky;
paddin-top: 10px;
top:o;
`

export const DivIcon= styled.div`
display: flex;
align-items: center;
background-color: #eee;
padding:10px;
border-radius: 20px;
>searchIcon{
    color:#5b7083;

}
>input{
    border:none;
    outline:0;
    padding-left: 10px;
    background-color: #eee;
    font-size:16px;
}
`
export const DivContent= styled.div`
`  