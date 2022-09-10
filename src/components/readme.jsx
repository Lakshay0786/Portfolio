import plane from '../img/plane-unscreen.gif'
import './readme.styles.css'

const Readme = () => {
    return (
        <section className="readme-div">
            <div className="readme-textbox">
                <h1 className="readme-h1">Readme.</h1>
                <p>dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </p>
                <p>
                    alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                </p>

                <p>alley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className='readme-img'>
                <img src={plane} alt="Readme-img" />
            </div>

        </section>
    )
}

export default Readme;