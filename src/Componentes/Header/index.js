import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsPlusSquare} from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'
import { IconContext } from 'react-icons'


import './style.css' 

export function Header(){
    return(
        <header className="header">

            <div className="container">

             <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

            <div className="input-fake">
                <AiOutlineSearch />
                <input />
            </div>

                <div className='menu-icons'>
                    <IconContext.Provider value={{size: '26px'}}>
                        <div><RiMessengerLine /></div>
                        <div><BsPlusSquare /></div>
                        <div><MdOutlineExplore /></div>
                        <div><FiHeart /></div>
                        <div><AiFillHome /></div>
    
                    </IconContext.Provider>
                    <img className='img-user' src="https://avatars.githubusercontent.com/u/112022434?s=400&u=c2a73a6c32f51b134532ce961d050b176fec6b88&v=4"/>
                </div>

            </div>
        </header>
    )
}