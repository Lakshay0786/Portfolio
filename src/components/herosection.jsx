import './herosection.styles.css'
import character from '../img/character.png'
import Nav from './nav';
const Herosection = () => {
    return (
        <>
            <section className='bg-top'>
                <Nav />
                <div className='bg'>
                    <div className="img">
                        <img className='main-img' src={character} alt="BigCo Inc. logo" />
                    </div>
                    <div className="textbox">
                        <h1>Hi! I Am <br></br> Lakshay Sharma</h1>
                        <p>Designer & Developer</p>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Herosection;