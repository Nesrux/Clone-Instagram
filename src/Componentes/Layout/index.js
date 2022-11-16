import { Post } from '../Post'
import { Story } from '../Story'
import { Suguestao } from '../Suguestao'
import './style.css'

export function Layout(){
    return(
        <>
            <div className='MainGrid'>
                <div className='frist-column' style={{gridArea:"firstColumn"}}>
                    
                    <div className="box" style={{margin:"30px 0"}}>
                        <Story />
                    </div>

                        
                    <div className="box">
                        <Post></Post>
                    </div>
                </div>
              
              


                <div style={{gridArea:'secondColumn'}}>
                <div className="suggestionBox">
                    <Suguestao/>
                </div>
                </div>
                
            </div>


        </>
    )
}