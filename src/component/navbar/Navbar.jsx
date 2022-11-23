import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchIcon />
        </div>
        <div className="items">
        <div className="item">
            <LanguageIcon className="icon"/>
            English
        </div>
        <div className="item">
          <DarkModeOutlinedIcon className="icon"/>
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon className="icon"/>
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className="icon"/>
          <div className="counter">9</div>
        </div>
        <div className="item">
          <ChatOutlinedIcon className="icon"/>
          <div className="counter">4</div>
        </div>
        <div className="item">
          <FormatListBulletedOutlinedIcon className="icon"/>
        </div>

        <div className="item">
        <img src="https://i.pinimg.com/736x/a1/56/13/a1561304faa3e43bb0de968e4a61b5fe.jpg"
        alt=""
        className="avatar"
        />
        <ArrowDropDownOutlinedIcon className="icon"/>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
