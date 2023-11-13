import cloud from './cloud.svg';
import './linkNav.css';

function LinkNav(){
    return (
        <>
       <header id='navigation-links'>
        <div className='icon-cloud'>
        <img src={cloud} alt="computer in icon format" style={{width: '50px'}} />
        </div>
        <div className='links'>
        <a className="link" href="#">Sobre</a>
        <a className="link" href="#">Contato</a>
        <a className="link" href="#">Habilidades</a>
        <a className="link" href="#">Projetos</a>
        </div>
       </header>
        </>
    
    )
}

export default LinkNav;