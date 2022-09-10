import './herosection.styles.css'
import character from '../img/character.png'
const Herosection = () => {
    return (
        <>
            <section className='bg-top'>
                <div className='bg'>
                    <div className="img">
                        <img className='main-img' src={character} alt="BigCo Inc. logo" />
                    </div>
                    <div className="textbox">
                        <h1>Hi! I Am <br></br> Lakshay Sharma</h1>
                        <p className='title'>Designer   <span>&</span>  Developer</p>
                        <p className='tagline'>lorem ksaks fkaskfas ksamfskafn shdgsahf asjsbasbhjbsfa dbhasnjf safnjsfnas sajfhjasf jsfjasfjfsa</p>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Herosection;