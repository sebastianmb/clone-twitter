import styled, {css} from 'styled-components'

export const Contenedor= styled.div`
    padding: 20px;
    border-rigth: 1px solid #ddd;
    flex: 0.2;
    min-width: 255px;
    >.twitter-logo{
        margin: 10px 0;
        width: 46px;
        heigth: 30px;
        fill: var(--twitterColor) !important;
    }
    >Button{
        background-color: var(--twitterColor) !important;
        border:none !important;
        color: white !important;
        font-weight:800 !important;
        text-transform: inherit !important;
        height: 46px !important;
        padding: 0 30px !important;
        border-radius: 9999px !important;
        margin-top: 20px;
    }
    @media only screen and (max-width: 1280px){
    flex: 0.05;
    min-width: 50px;
    >Button{
        display: none;
    }

    }
    @media only screen and (max-width: 1004px){
        width: 40px;
        
    
    }
    @media only screen and (max-width: 500px){
        position: fixed;
        bottom:0;
        display:flex;
        justify-content: space-around;
        align-items: center;
        z-index: 999;
        height:50px;
        background-color:white;
        width:100%;
        padding:0;
        .twitter-logo{
            display:none;
        }
        
    
    }
`

export const SidebarIcon= styled.div`

    display: flex;
    align-items: center;
    padding: 14px 10px;
    >h2{
        font-size: 19px;
        margin: 0 15px 0 20px;
        font-weigth: 700;
    }
    >.MuiSvgIcon-root{
        width: 30px;
        heigth: 10px;
    }

    &:hover{
        background-color: var(--Hover);
        color: var(--twitterColor);
        transform: color 100ms ease-out;
        border-radius: 9999px;
    }

    ${props=> props.active && css`
    
        color: var(--twitterColor);
        background-color: var(--Hover);
        
    `}
    @media only screen and (max-width: 1280px){
        border-radius: 50%;
        >h2{
            display:none;
        }
        
    
    }
    @media only screen and (max-width: 500px){
       color: #b8b8b8;
       display: ${props => props.primary ? 'none' : ''};
       color: ${props => props.active ? 'var(--twitterColor)' : ''};
    
    }
`