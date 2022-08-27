import React from 'react'
import { Contenedor } from './styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconOption from './IconOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const Sidebar = () => {
  return (
    <Contenedor>
        <TwitterIcon/>
        {/*IconOption */}
        <IconOption text='Home' Icon ={<HomeIcon />} />
        <IconOption text='Explorar' Icon ={<SearchIcon />} />
        <IconOption text='Notificaciones' Icon ={<NotificationsNoneIcon />}/>
        <IconOption text='Mensajes' Icon ={<MailOutlineIcon />}/>
        <IconOption text='Guardados' Icon ={<BookmarkBorderIcon />}/>
        <IconOption text='Listas' Icon ={<SubjectOutlinedIcon />}/>
        <IconOption text='Perfil' Icon ={<PersonOutlinedIcon />}/>
        <IconOption text='Mas opciones' Icon ={<MoreHorizOutlinedIcon />}/>

    </Contenedor>
  )
}

export default Sidebar
