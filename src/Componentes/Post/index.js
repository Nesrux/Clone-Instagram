import './style.css'
import {FiMoreHorizontal} from 'react-icons/fi'
import {BsChat} from 'react-icons/bs'
import {IoMdHeartEmpty} from 'react-icons/io'
import {FiSend} from 'react-icons/fi'
import {BsBookmark, BsEmojiSmile} from 'react-icons/bs'
import { IconContext } from 'react-icons'

export function Post(){
    return(
        <>
            <header className='header-post'>

                <div className="infos-post">
                    <img className='img-header-post' src="https://images.pexels.com/photos/8206882/pexels-photo-8206882.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

                    <p>shkrabaanthony</p>
                </div>

                <FiMoreHorizontal/>
            </header>

            <div className='img-post'>
             <img src="https://images.pexels.com/photos/4398893/pexels-photo-4398893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size:"30px"}}>
                    <section className='engagement-post'>
                        <div className='icos-1'>
                            <div className='icon'><IoMdHeartEmpty/></div>
                            <div className='icon'><BsChat/></div>
                            <div className='icon'><FiSend/></div>   
                        </div>

                        <div className='icon'><BsBookmark/></div>
                    </section>
                </IconContext.Provider>

                <section className='like'>

                    <span>61 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <span><strong>shkrabaanthony</strong> Depois de tanto apanhar da vida, decidi entrar no boxe, hoje apanho da vida e no boxe</span>
                    </p>

                </div>

                <div className='time-post'>
                    <time>Há 1 hora</time>
                </div>
                
                <div className='comment'>

                  <div className='fake-comment'>
                 <IconContext.Provider value={{size:'25px'}}>
                    <div className='icon'>
                     <BsEmojiSmile/>
                    </div>
                </IconContext.Provider>


                <input placeholder='Adicione um comentário'/>
                <button>publicar</button>


                  </div>

                </div>

                
            </div>
                <header className='header-post'>

    <div className="infos-post">
        <img className='img-header-post' src="https://images.pexels.com/photos/14042396/pexels-photo-14042396.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

        <p>Kamiliazx</p>
    </div>

    <FiMoreHorizontal/>
    </header>

    <div className='img-post'>
    <img src="https://images.pexels.com/photos/10182119/pexels-photo-10182119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>

    <div className='footer-post'>
    <IconContext.Provider value={{size:"30px"}}>
        <section className='engagement-post'>
            <div className='icos-1'>
                <div className='icon'><IoMdHeartEmpty/></div>
                <div className='icon'><BsChat/></div>
                <div className='icon'><FiSend/></div>   
            </div>

            <div className='icon'><BsBookmark/></div>
        </section>
    </IconContext.Provider>

    <section className='like'>

        <span>7896 curtidas</span>
    </section>

    <div className='legend'>
        <p>
            <span><strong>Kamiliazx</strong> Novo ensaio de fotos, dessa vez fazendo um cospley para comemorar a festa</span>
        </p>

    </div>

    <div className='time-post'>
        <time>Há 8 horas</time>
    </div>

    <div className='comment'>

    <div className='fake-comment'>
    <IconContext.Provider value={{size:'25px'}}>
        <div className='icon'>
        <BsEmojiSmile/>
        </div>
    </IconContext.Provider>


    <input placeholder='Adicione um comentário'/>
    <button>publicar</button>


    </div>

    </div>





</div>

    <header className='header-post'>

    <div className="infos-post">
        <img className='img-header-post' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBsrqNHW5AWpLtwI3c0MFeORGx7LBWZLFKA&usqp=CAU"/>

        <p>Pijack</p>
    </div>

    <FiMoreHorizontal/>
    </header>

    <div className='img-post'>
    <img src="https://pbs.twimg.com/media/FZqkEd2WQAArlyR.jpg:large"/>
    </div>

    <div className='footer-post'>
    <IconContext.Provider value={{size:"30px"}}>
        <section className='engagement-post'>
            <div className='icos-1'>
                <div className='icon'><IoMdHeartEmpty/></div>
                <div className='icon'><BsChat/></div>
                <div className='icon'><FiSend/></div>   
            </div>

            <div className='icon'><BsBookmark/></div>
        </section>
    </IconContext.Provider>

    <section className='like'>

        <span>200.000 curtidas</span>
    </section>

    <div className='legend'>
        <p>
            <span><strong>Pijack</strong> Pijas e o pai</span>
        </p>

    </div>

    <div className='time-post'>
        <time>Há 1 hora</time>
    </div>

    <div className='comment'>

    <div className='fake-comment'>
    <IconContext.Provider value={{size:'25px'}}>
        <div className='icon'>
        <BsEmojiSmile/>
        </div>
    </IconContext.Provider>


    <input placeholder='Adicione um comentário'/>
    <button>publicar</button>


    </div>

    </div>





    </div>
        </>
    )
}